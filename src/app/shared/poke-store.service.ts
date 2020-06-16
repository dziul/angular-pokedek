import { Injectable } from '@angular/core';

import { forkJoin, Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';

import { shareReplayOnlyOneEmitter } from '../shared/operators/shareReplayOnlyOneEmitter.operator';
import {
  PokemonGenerationItem,
  PokemonGenerationWithPokemonListParsed,
} from './models/pokemon-generation.model';
import { PokemonParsed } from './models/pokemon.model';
import { PokeApiService } from './poke-api.service';

@Injectable({
  providedIn: 'root',
})
export class PokeStoreService {
  pokelist$: Observable<PokemonGenerationItem[]>;

  generationList$: Observable<PokemonGenerationWithPokemonListParsed[]>;

  pokemons: { [key: string]: Observable<PokemonParsed> } = {};

  constructor(private api: PokeApiService) {}

  protected onlyOneEmitter<T>(observer$: Observable<T>) {
    return observer$.pipe(publishReplay(1), refCount());
  }

  getPokemonList() {
    if (!this.pokelist$) {
      this.pokelist$ = this.api.getAllPokemons().pipe(shareReplayOnlyOneEmitter());
    }
    return this.pokelist$;
  }

  getGenerationList() {
    if (!this.generationList$) {
      this.generationList$ = this.api.getAllGeneration().pipe(shareReplayOnlyOneEmitter());
    }
    return this.generationList$;
  }

  getPokemonInformation(nameOrId: string | number) {
    if (!this.pokemons[nameOrId]) {
      this.pokemons[nameOrId] = this.api.getPokemon(nameOrId).pipe(shareReplayOnlyOneEmitter());
    }
    return this.pokemons[nameOrId];
  }

  getAllPokemonInformation() {
    return forkJoin(this.pokemons);
  }
}
