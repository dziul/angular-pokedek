import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

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
  loading$ = new BehaviorSubject<boolean>(false);
  route$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private htmlDocument: HtmlDocumentService,
    private store: PokeStoreService
  ) {}

  ngOnInit() {
    this.route$ = this.route.params.subscribe((params: { id: number | string }) => {
      this.information$ = this.store.getPokemonInformation(params.id).pipe(
        initialize(() => {
          this.loading$.next(true);
        }),
        tap((data) => {
          this.htmlDocument.setTitle(`Pokémon ${data.name.default}`);
          this.htmlDocument.setMetaDescription(`${data.name.default}, ${data.description}`);
        }),
        finalize(() => {
          this.loading$.next(false);
        })
      );
    });
  }

  ngOnDestroy() {
    this.route$.unsubscribe();
  }
}
