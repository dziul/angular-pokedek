import { FocusKeyManager } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { initialize } from 'src/app/shared/operators/initialize.operator';

import { PokemonGenerationItem } from '../shared/models/pokemon-generation.model';
import { PokeStoreService } from '../shared/poke-store.service';
import { SelectOptionDirective } from './select-option.directive';

@Component({
  selector: 'app-poke-select',
  templateUrl: './poke-select.component.html',
  styleUrls: ['./poke-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokeSelectComponent implements OnInit, AfterViewInit {
  @ViewChild('input', { read: ElementRef }) inputElement: ElementRef<HTMLInputElement>;

  @ViewChildren(SelectOptionDirective) options: QueryList<SelectOptionDirective>;

  inputValue = '';
  list$: Observable<PokemonGenerationItem[]>;
  loading$ = new BehaviorSubject<boolean>(false);

  focusByInput = false;

  keyManager: FocusKeyManager<SelectOptionDirective>;

  constructor(private store: PokeStoreService) {}

  ngOnInit() {
    this.list$ = this.store.getPokemonList().pipe(
      initialize(() => this.loading$.next(true)),
      finalize(() => {
        this.loading$.next(false);
      })
    );
  }

  ngAfterViewInit() {
    this.keyManager = new FocusKeyManager(this.options); // .withWrap().withTypeAhead();
  }

  onKeyDown(event: KeyboardEvent) {
    const key = event.key.toLowerCase();

    switch (key) {
      case 'arrowup':
        if (this.keyManager.activeItemIndex === 0 && this.focusByInput) {
          this.focusByInput = false;
          this.inputElement.nativeElement.select();
        } else {
          this.keyManager.onKeydown(event);
        }
        break;
      case 'home':
        this.keyManager.setFirstItemActive();
        break;
      case 'end':
        this.keyManager.setLastItemActive();
        break;
      default:
        this.keyManager.onKeydown(event);
    }
  }

  onKeyDownInput(event: KeyboardEvent) {
    const key = event.key.toLowerCase();
    switch (key) {
      case 'arrowdown':
        this.keyManager.setFirstItemActive();
        break;
    }

    this.focusByInput = true;
  }

  onClick(index: number) {
    console.log(index);
    this.keyManager.setActiveItem(index);
  }
}
