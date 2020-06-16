import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { fromEvent, Subscription } from 'rxjs';

import { EventTargetImageModel } from './picture.model';

@Component({
  selector: 'app-picture',
  template: `<img src="{{ src }}" alt="{{ alt }}" class="poke-picture" #picture />`,
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor() {}
  @Input() src = '';
  @Input() alt = '';
  @ViewChild('picture', { read: ElementRef }) pictureElement: ElementRef<HTMLImageElement>;

  picture$: Subscription;

  onLoad(event: EventTargetImageModel) {
    console.log(event);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.picture$ = fromEvent<EventTargetImageModel>(
      this.pictureElement.nativeElement,
      'load'
    ).subscribe((event) => {
      console.log(event);
    });
  }

  ngOnDestroy() {
    this.picture$.unsubscribe();
  }
}
