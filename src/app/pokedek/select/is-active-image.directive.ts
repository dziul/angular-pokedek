import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { fromEvent } from 'rxjs';
import { PokemonGenerationItem } from 'src/app/shared/models/pokemon-generation.model';

import { getColorByConstrastPorcentage } from '../../../utils/imageColorPixel';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[isActiveImage]',
})
export class IsActiveImageDirective implements AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() isActiveEmitter = new EventEmitter<number[]>();
  @Input('isActiveImage') pokemon: PokemonGenerationItem;
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
      const dataColorParsed = getColorByConstrastPorcentage(dataColors, 10, 85);

      this.isActiveEmitter.emit(dataColorParsed.pop());
    });
  }
}
