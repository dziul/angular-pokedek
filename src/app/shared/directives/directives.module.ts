import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LazySrcLoadDirective } from './lazy-src-load.directive';

@NgModule({
  declarations: [LazySrcLoadDirective],
  imports: [CommonModule],
  exports: [LazySrcLoadDirective],
})
export class DirectivesModule {}
