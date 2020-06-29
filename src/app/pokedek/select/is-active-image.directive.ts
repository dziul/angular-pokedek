import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { fromEvent } from 'rxjs';
import { PokemonGenerationItem } from 'src/app/shared/models/pokemon-generation.model';

import { getContrast, getDominantColor } from '../../../utils/imageColorPixel';
import { SelectOnIsActiveImageProp } from './select.model';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[isActiveImage]',
})
export class IsActiveImageDirective implements AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() isActiveEmitter = new EventEmitter<SelectOnIsActiveImageProp>();
  @Input('isActiveImage') pokemon: PokemonGenerationItem;

  blackList = [
    [0, 0, 0],
    [62, 62, 62],
    [64, 64, 64],
    [77, 87, 106],
    [81, 90, 106],

    [235, 240, 237],
    [248, 248, 248],
    [255, 255, 255],
  ];

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.params.subscribe((params: { id: string | number }) => {
      const { id, name } = this.pokemon;
      const paramId = params.id.toString().toLowerCase();

      if ([id.toString(), name].includes(paramId)) {
        const imageUrl = this.pokemon.imageIcon;
        this.getColors(imageUrl);
      }
    });
  }

  getColors(imageUrl: string) {
    const image = new Image();
    image.src = imageUrl;
    image.crossOrigin = 'Anonymous';

    const canvas = document.createElement('canvas');
    const canvasContext = canvas.getContext('2d');

    fromEvent<Event & { target: HTMLImageElement }>(image, 'load').subscribe((event) => {
      const { target } = event;
      canvasContext.drawImage(target, 0, 0, target.width, target.height);
      const dataColors = canvasContext.getImageData(0, 0, target.width, target.height).data;
      const colorDominant = getDominantColor(dataColors, this.blackList).sort((a, b) => {
        return getContrast(a[0], a[1], a[2]) - getContrast(b[0], b[1], b[2]);
      });

      const color = colorDominant.pop();
      const isDark = getContrast(color[0], color[1], color[2]) < 50.19;

      this.isActiveEmitter.emit({
        color,
        isDark,
      });
    });
  }
}
