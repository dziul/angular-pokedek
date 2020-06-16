import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';

import { BehaviorSubject, Observable, Subscribable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { initialize } from 'src/app/shared/operators/initialize.operator';

import { PokemonGenerationItem } from '../shared/models/pokemon-generation.model';
import { PokeStoreService } from '../shared/poke-store.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-select.component.html',
  styleUrls: ['./poke-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokeSelectComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('lazy', { read: ElementRef }) imagesElement: QueryList<
    ElementRef<HTMLImageElement>
  >;

  list$: Observable<PokemonGenerationItem[]>;
  loading$ = new BehaviorSubject<boolean>(false);
  imagesElement$: Subscription;

  constructor(private store: PokeStoreService, private renderer2: Renderer2) {}

  ngOnInit() {
    this.list$ = this.store.getPokemonList().pipe(
      initialize(() => this.loading$.next(true)),
      finalize(() => this.loading$.next(false))
    );
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries: (IntersectionObserverEntry & { target: HTMLImageElement })[], observe) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer2.setAttribute(entry.target, 'src', entry.target.dataset.src);
            this.renderer2.removeAttribute(entry.target, 'data-src');
            this.renderer2.removeClass(entry.target, 'invisible');
            this.renderer2.setAttribute(entry.target, 'aria-hidden', 'false');
            observer.unobserve(entry.target);
          }
        }
      },
      {
        rootMargin: '100px',
      }
    );
    this.imagesElement$ = this.imagesElement.changes.subscribe(
      (data: QueryList<ElementRef<HTMLImageElement>>) => {
        data.forEach((element) => {
          observer.observe(element.nativeElement);
        });
      }
    );
  }

  ngOnDestroy() {
    this.imagesElement$.unsubscribe();
  }
}
