import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';

import { PokemonGenerationItem } from '../shared/models/pokemon-generation.model';
import { PokeStoreService } from '../shared/poke-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  formControl = new FormControl();
  filteredOptions$: Observable<PokemonGenerationItem[]>;

  constructor(private store: PokeStoreService, private router: Router) {}

  ngOnInit() {
    this.filteredOptions$ = this.formControl.valueChanges.pipe(
      startWith(''),
      debounceTime(200),
      switchMap((value) => this.pokemonListFilter(value))
    );
  }

  private pokemonListFilter(value: string) {
    const filterValue = value.toLowerCase();
    return this.store.getPokemonList().pipe(
      map((items) =>
        items.filter((item) => {
          const pattern = `${item.id}${item.name}`;
          return pattern.toLowerCase().includes(filterValue);
        })
      )
    );
  }

  onSelectedValue(event: MatAutocompleteSelectedEvent) {
    this.router.navigate(['/pokedek', event.option.value]);
  }
}
