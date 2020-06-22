// @ref https://codepen.io/vinztt/pen/XjEyvk

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokeball-loader',
  template: `<span class="pokeball-loader" role="img" attr.aria-label="pokéball"
      ><span class="pokeball-loader__content"></span></span
    ><ng-content></ng-content>`,
  styleUrls: ['./pokeball-loader.component.scss'],
})
export class PokeballLoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
