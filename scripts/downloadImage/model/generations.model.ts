export interface Generations {
  count: number;
  next: null;
  previous: null;
  results: Result[];
}

export interface Generation {
  abilities: Result[];
  id: number;
  main_region: Result;
  moves: Result[];
  name: string;
  names: Name[];
  pokemon_species: Result[];
  types: Result[];
  version_groups: Result[];
}

interface Result {
  name: string;
  url: string;
}

interface Name {
  language: Result;
  name: string;
}
