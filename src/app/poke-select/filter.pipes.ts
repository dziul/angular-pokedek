import { Pipe, PipeTransform } from '@angular/core';

import { PokemonGenerationItem } from '../shared/models/pokemon-generation.model';

@Pipe({
  name: 'where',
})
export class WherePipe implements PipeTransform {
  transform(items: PokemonGenerationItem[], search: string) {
    return items.filter((item) => {
      const pattern = `${item.name} ${item.id}`;
      return pattern.indexOf(search.trim().toLowerCase()) !== -1;
    });
  }
}
