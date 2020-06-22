import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BehaviorSubject, empty, Observable, Subject } from 'rxjs';
import { catchError, delay, finalize, tap } from 'rxjs/operators';

import { HtmlDocumentService } from '../shared/html-document/html-document.service';
import { PokemonParsed } from '../shared/models/pokemon.model';
import { initialize } from '../shared/operators/initialize.operator';
import { PokeStoreService } from '../shared/poke-store.service';

@Component({
  selector: 'app-pokedek',
  templateUrl: './pokedek.component.html',
  styleUrls: ['./pokedek.component.scss'],
})
export class PokedekComponent implements OnInit, OnDestroy {
  information$: Observable<PokemonParsed>;

  imageLoaded$ = new BehaviorSubject(false);
  error$ = new Subject<number | string>();
  paramsId$ = new Subject<string | number>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private htmlDocument: HtmlDocumentService,
    private store: PokeStoreService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: { id: number | string }) => {
      this.information$ = this.store.getPokemonInformation(params.id).pipe(
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

  onImageLoaded(on) {
    this.imageLoaded$.next(on);
  }

  ngOnDestroy() {}
}
