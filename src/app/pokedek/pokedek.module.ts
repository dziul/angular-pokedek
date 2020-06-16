import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PictureComponent } from '../picture/picture.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokedekComponent } from './pokedek.component';
import { PokedekRoutingModule } from './pokedek.routing.module';

@NgModule({
  declarations: [PokedekComponent, PokeListComponent, PictureComponent],
  imports: [CommonModule, PokedekRoutingModule, ScrollingModule],
})
export class PokedekModule {}
