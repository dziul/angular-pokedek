import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DirectivesModule } from '../../shared/directives/directives.module';
import { MaterialComponentsModule } from '../../shared/material-components/material-components.module';
import { WherePipe } from './filter.pipes';
import { IsActiveImageDirective } from './is-active-image.directive';
import { SelectOptionDirective } from './select-option.directive';
import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent, SelectOptionDirective, WherePipe, IsActiveImageDirective],
  imports: [CommonModule, MaterialComponentsModule, RouterModule, FormsModule, DirectivesModule],
  exports: [SelectComponent],
})
export class SelectModule {}
