import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PictureComponent } from '../picture/picture.component';
import { PokeSelectModule } from '../poke-select/poke-select.module';
import { PokeballLoaderComponent } from '../pokeball-loader/pokeball-loader.component';
import { MaterialComponentsModule } from '../shared/material-components/material-components.module';
import { InformationComponent } from './information/information.component';
import { PokedekRoutingModule } from './pokedek.routing.module';

@NgModule({
  declarations: [PictureComponent, PokeballLoaderComponent, InformationComponent],
  imports: [
    CommonModule,
    PokedekRoutingModule,
    ScrollingModule,
    MaterialComponentsModule,
    PokeSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PokedekModule {}
