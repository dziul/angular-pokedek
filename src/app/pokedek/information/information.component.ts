import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BehaviorSubject, empty, Observable, Subject } from 'rxjs';
import { catchError, delay, finalize, tap } from 'rxjs/operators';

import { HtmlDocumentService } from '../../shared/html-document/html-document.service';
import { PokemonParsed } from '../../shared/models/pokemon.model';
import { initialize } from '../../shared/operators/initialize.operator';
import { PokeStoreService } from '../../shared/poke-store.service';
import { SelectOnIsActiveImageProp } from '../select/select.model';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  information$: Observable<PokemonParsed>;
  imageLoaded$ = new BehaviorSubject(false);
  error$ = new Subject<number | string>();
  paramsId$ = new Subject<string | number>();

  backgroundColorPrimary = 'rgba(253, 213, 0, 0.7)';
  backgroundColorSecondary = 'rgb(253, 213, 0)';
  isDark: boolean;

  constructor(
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private elementHost: ElementRef,
    private htmlDocument: HtmlDocumentService,
    private store: PokeStoreService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: { id: number | string }) => {
      this.information$ = this.store.getPokemonInformation(params.id.toString().toLowerCase()).pipe(
        initialize(() => {
          this.imageLoaded$.next(false);
          this.error$.next(undefined);
        }),
        delay(1000),
        tap((data) => {
          this.htmlDocument.setTitle(`Pokémon ${data.name.default}`);
          this.htmlDocument.setMetaDescription(`${data.name.default}, ${data.description}`);
        }),
        catchError((error) => {
          this.error$.next(params.id);
          return empty();
        })
      );
    });
  }

  onImageLoaded(on: boolean) {
    this.imageLoaded$.next(on);
  }

  changeBackgroundColor(data: SelectOnIsActiveImageProp) {
    const { color, isDark } = data;
    this.backgroundColorPrimary = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.7)`;
    this.backgroundColorSecondary = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    this.isDark = isDark;
  }
}
