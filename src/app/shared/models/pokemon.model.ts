import { PokemonGenerationParsed } from './pokemon-generation.model';

export interface PokemonParsed {
  height: number;
  weight: number;
  description: string;
  name: {
    original: string;
    id: string;
    default: string;
  };
  id: number;
  image: {
    default: string;
    icon: string;
  };
  generation: PokemonGenerationParsed;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Species[];
  species: Species;
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: LocationAreaEncounter[];
  moves: Move[];

  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: Species;
}

interface Species {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: Species;
}

interface HeldItem {
  item: Species;
  version_details: HeldItemVersionDetail[];
}

interface HeldItemVersionDetail {
  rarity: number;
  version: Species;
}

interface LocationAreaEncounter {
  location_area: Species;
  version_details: LocationAreaEncounterVersionDetail[];
}

interface LocationAreaEncounterVersionDetail {
  max_chance: number;
  encounter_details: EncounterDetail[];
  version: Species;
}

interface EncounterDetail {
  min_level: number;
  max_level: number;
  condition_values: Species[];
  chance: number;
  method: Species;
}

interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  version_group: Species;
  move_learn_method: Species;
}

interface Sprites {
  back_female: string;
  back_shiny_female: string;
  back_default: string;
  front_female: string;
  front_shiny_female: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}
