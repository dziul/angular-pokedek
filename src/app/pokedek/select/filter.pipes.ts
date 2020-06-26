import { Pipe, PipeTransform } from '@angular/core';

import stringNormalize from 'src/utils/stringNormalize';

import { PokemonGenerationItem } from '../../shared/models/pokemon-generation.model';

@Pipe({
  name: 'where',
})
export class WherePipe implements PipeTransform {
  transform(items: PokemonGenerationItem[], search: string) {
    return items.filter((item) => {
      const pattern = stringNormalize(`${item.name} ${item.id}`).toLowerCase();
      return pattern.indexOf(stringNormalize(search.trim()).toLowerCase()) !== -1;
    });
  }
}
