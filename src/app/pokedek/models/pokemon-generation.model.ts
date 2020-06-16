export interface PokemonGenerationWithPokemonListParsed extends PokemonGenerationParsed {
  pokemons: MainRegionWithId[];
}

export interface PokemonGenerations {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}

export interface PokemonGeneration {
  abilities: any[];
  id: number;
  main_region: MainRegion;
  moves: MainRegion[];
  name: string;
  names: Name[];
  pokemon_species: MainRegion[];
  types: MainRegion[];
  version_groups: MainRegion[];
}

interface Result {
  name: string;
  url: string;
}

interface MainRegion {
  name: string;
  url: string;
}

export interface MainRegionWithId extends MainRegion {
  id: number;
  imageIcon: string;
}
export interface PokemonGenerationParsed {
  name: {
    default: string;
    id: string;
    original: string;
  };
  id: number;
}

export interface Name extends Language {
  name: string;
}

export interface Language {
  language: MainRegion;
}
