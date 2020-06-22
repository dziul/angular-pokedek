import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InformationComponent } from './information/information.component';
import { PokedekComponent } from './pokedek.component';

const startedRoute: Routes = [
  {
    path: ':id', // is /started
    component: InformationComponent,
  },
  {
    path: '', // is /started
    component: PokedekComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(startedRoute)],
  exports: [RouterModule],
})
export class PokedekRoutingModule {}
