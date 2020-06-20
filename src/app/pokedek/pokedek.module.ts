import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PictureComponent } from '../picture/picture.component';
import { PokeSelectModule } from '../poke-select/poke-select.module';
import { PokeballLoaderComponent } from '../pokeball-loader/pokeball-loader.component';
import { MaterialComponentsModule } from '../shared/material-components/material-components.module';
import { PokedekComponent } from './pokedek.component';
import { PokedekRoutingModule } from './pokedek.routing.module';

@NgModule({
  declarations: [PokedekComponent, PictureComponent, PokeballLoaderComponent],
  imports: [
    CommonModule,
    PokedekRoutingModule,
    ScrollingModule,
    MaterialComponentsModule,
    PokeSelectModule,
  ],
})
export class PokedekModule {}
