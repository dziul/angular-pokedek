import { TestBed } from '@angular/core/testing';

import { PokedekStoreService } from './pokedek-store.service';

describe('PokedekStoreService', () => {
  let service: PokedekStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedekStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
