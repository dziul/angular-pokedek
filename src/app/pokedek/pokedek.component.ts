import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { HtmlDocumentService } from '../shared/html-document/html-document.service';
import { initialize } from '../shared/operators/initialize.operator';
import { PokemonParsedModel } from './models/pokemon.model';
import { PokedekStoreService } from './pokedek-store.service';
import { PokedekService } from './pokedek.service';

@Component({
  selector: 'app-pokedek',
  templateUrl: './pokedek.component.html',
  styleUrls: ['./pokedek.component.scss'],
})
export class PokedekComponent implements OnInit, OnDestroy {
  information$: Observable<PokemonParsedModel>;
  loading$ = new BehaviorSubject<boolean>(false);
  route$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private htmlDocument: HtmlDocumentService,
    private api: PokedekService,
    private store: PokedekStoreService
  ) {}

  ngOnInit() {
    this.route$ = this.route.params.subscribe((params: { id: number | string }) => {
      this.information$ = this.store.getPokemonInformation(params.id).pipe(
        initialize(() => {
          this.loading$.next(true);
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
