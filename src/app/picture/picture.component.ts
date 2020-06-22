import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { fromEvent } from 'rxjs';

import { EventTargetImageModel } from './picture.model';

@Component({
  selector: 'app-picture',
  template: `<img src="{{ src }}" alt="{{ alt }}" class="poke-picture" #picture />`,
  styles: [
    `
      .poke-picture {
        max-width: inherit;
        max-height: inherit;
      }
    `,
  ],
})
export class PictureComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor() {}
  @Input() src = '';
  @Input() alt = '';
  @Output() loaded = new EventEmitter();

  @ViewChild('picture', { read: ElementRef }) pictureElement: ElementRef<HTMLImageElement>;

  ngOnInit() {}

  ngAfterViewInit() {
    fromEvent<EventTargetImageModel>(this.pictureElement.nativeElement, 'load').subscribe(
      (event) => {
        console.log(event);
        this.loaded.emit(true);
      }
    );
  }

  ngOnDestroy() {}
}
