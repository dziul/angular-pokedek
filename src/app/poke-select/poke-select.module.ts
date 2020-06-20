import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialComponentsModule } from '../shared/material-components/material-components.module';
import { WherePipe } from './filter.pipes';
import { PokeSelectComponent } from './poke-select.component';
import { SelectOptionDirective } from './select-option.directive';

@NgModule({
  declarations: [PokeSelectComponent, SelectOptionDirective, WherePipe],
  imports: [CommonModule, MaterialComponentsModule, RouterModule, FormsModule],
  exports: [PokeSelectComponent],
})
export class PokeSelectModule {}
