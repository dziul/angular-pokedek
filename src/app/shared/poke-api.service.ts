import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { forkJoin, from, merge, Observable, of } from 'rxjs';
import { concatAll, map, mergeAll, mergeMap, pluck, retry, take, toArray } from 'rxjs/operators';

import { PokemonEvolutionChainModel } from './models/pokemon-evolution-chain.model';
import {
  Language,
  PokemonGeneration,
  PokemonGenerationParsed,
  PokemonGenerations,
  PokemonGenerationWithPokemonListParsed,
} from './models/pokemon-generation.model';
import { PokemonSpecie } from './models/pokemon-specie.model';
import { PokemonType } from './models/pokemon-type.model';
import { Pokemon, PokemonParsed } from './models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  languageDefault = 'en'; // window.navigator.language.replace(/^(\w+)-.+/, '$1')
  languageOriginal = 'ja';

  constructor(private http: HttpClient) {}

  get<T>(url: string) {
    return this.http.get<T>(url).pipe(retry(2), take(1));
  }

  getAllGeneration() {
    return this.get<PokemonGenerations>('/generation').pipe(
      mergeMap((response) => response.results),
      map((result) => this.get<PokemonGeneration>(result.url)),
      concatAll(),
      map(
        (response): PokemonGenerationWithPokemonListParsed => {
          const filteredNames = this.searchFilterDataByLanguage(response.names, 'name');

          return {
            name: {
              id: response.name,
              original: filteredNames.original,
              default: filteredNames.default,
            },
            id: response.id,
            pokemons: [
              ...response.pokemon_species
                .map((pokemon) => {
                  const pokemonId = pokemon.url.replace(/.*\/(\d+).?$/, '$1');
                  return {
                    ...pokemon,
                    id: pokemonId.length && Number(pokemonId),
                    imageIcon: this.getPokemonImageIcon(pokemon.name),
                  };
                })
                .sort((a, b) => a.id - b.id),
            ],
          };
        }
      ),
      toArray()
    );
  }

  getAllPokemons() {
    return this.getAllGeneration().pipe(mergeAll(), pluck('pokemons'), concatAll(), toArray());
  }

  pokemonSpecieParser(data$: Observable<PokemonSpecie>) {
    return data$.pipe(
      mergeMap((response) =>
        forkJoin({
          base: of(response),
          evolutionChain: this.get<PokemonEvolutionChainModel>(response.evolution_chain.url),
          generation: this.generationParser(this.get<PokemonGeneration>(response.generation.url)),
        })
      )
    );
  }

  getPokemon(nameOrId: string | number) {
    const data = {};
    return this.get<Pokemon>(`/pokemon/${nameOrId}`).pipe(
      mergeMap((response) =>
        forkJoin({
          base: of(response),
          species: this.pokemonSpecieParser(this.get<PokemonSpecie>(response.species.url)),
          type: merge(...response.types.map((type) => this.get<PokemonType>(type.type.url))).pipe(
            toArray()
          ),
        })
      ),
      map(
        (response): PokemonParsed => {
          const { base, species } = response;
          const filteredNames = this.searchFilterDataByLanguage(species.base.names, 'name');

          return {
            height: Number((base.height * 0.1).toFixed(1)), // metro
            weight: Number((base.weight * 0.1).toFixed(1)), // kg
            description: this.searchFilterDataByLanguage(
              species.base.flavor_text_entries,
              'flavor_text'
            ).default.replace(/(\r\n|\n|\r|\u000c)/gm, ' '), // o conteudo possui caracteres estranhos
            image: {
              default: this.getPokemonImageDefault(species.base.id),
              icon: this.getPokemonImageIcon(base.name),
            },
            name: {
              original: filteredNames.original,
              id: base.name,
              default: filteredNames.default,
            },
            id: species.base.id,
            generation: species.generation,
          };
        }
      )
    );
  }

  typeParser(data$: Observable<PokemonType>) {
    return data$;
  }

  generationParser(data$: Observable<PokemonGeneration>) {
    return data$.pipe(
      map(
        (data): PokemonGenerationParsed => {
          const filteredNames = this.searchFilterDataByLanguage(data.names, 'name');
          return {
            id: data.id,
            name: {
              ...filteredNames,
              id: data.name,
            },
          };
        }
      )
    );
  }

  searchFilterDataByLanguage<T extends Language, K extends keyof T>(data: T[], targetKey: K) {
    return data.reduce((accumulator, currnetValue) => {
      if (currnetValue.language.name === this.languageDefault) {
        accumulator = { ...accumulator, default: currnetValue[targetKey] };
      }
      if (currnetValue.language.name === this.languageOriginal) {
        accumulator = { ...accumulator, original: currnetValue[targetKey] };
      }
      return accumulator;
    }, {}) as { default: string; original: string };
  }

  getPokemonImageDefault(id: number) {
    return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`; // cors ->ok
  }
  getPokemonImageIcon(nameId: string) {
    // return `https://img.pokemondb.net/sprites/black-white/anim/normal/${nameId}.gif`;
    return `https://img.pokemondb.net/sprites/sword-shield/icon/${nameId}.png`;
  }
}
