import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StartedComponent } from './started.component';
import { StartedRoutingModule } from './started.routing.module';

@NgModule({
  declarations: [StartedComponent],
  imports: [CommonModule, StartedRoutingModule],
  exports: [],
})
export class StartedModule {}
