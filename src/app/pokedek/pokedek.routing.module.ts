import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InformationComponent } from './information/information.component';

const startedRoute: Routes = [
  {
    path: ':id', // is /started
    component: InformationComponent,
  },
  { path: '**', redirectTo: '1' }, // temporario
];

@NgModule({
  imports: [RouterModule.forChild(startedRoute)],
  exports: [RouterModule],
})
export class PokedekRoutingModule {}
