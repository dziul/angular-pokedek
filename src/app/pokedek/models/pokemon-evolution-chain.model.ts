export interface PokemonEvolutionChainModel {
  baby_trigger_item?: any;
  chain: Chain;
  id: number;
}

interface Chain {
  evolution_details: EvolutionDetail[];
  evolves_to: Chain[];
  is_baby: boolean;
  species: Species;
}

interface EvolutionDetail {
  gender?: any;
  held_item: Species;
  item?: Species;
  known_move?: any;
  known_move_type?: Species | any;
  location?: Species;
  min_affection?: number;
  min_beauty?: number;
  min_happiness?: number;
  min_level?: any;
  needs_overworld_rain?: boolean;
  party_species?: any;
  party_type?: any;
  relative_physical_stats?: any;
  time_of_day?: string;
  trade_species?: any;
  trigger?: Species;
  turn_upside_down?: boolean;
}

interface Species {
  name: string;
  url: string;
}
