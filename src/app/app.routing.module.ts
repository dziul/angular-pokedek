import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'started',
    loadChildren: () => import('./started/started.module').then((module) => module.StartedModule),
  },
  {
    path: 'pokedek',
    loadChildren: () => import('./pokedek/pokedek.module').then((module) => module.PokedekModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    // RouterModule.forRoot(routes, {
    //   preloadingStrategy: PreloadAllModules, // preload carrega em segundo plano os componentes
    // }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
