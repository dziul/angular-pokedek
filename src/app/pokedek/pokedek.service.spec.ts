import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { Interceptor } from 'src/app/core/interceptor/interceptor.module';

import { PokemonModel } from './models/pokemon.model';
import { PokedekService } from './pokedek.service';

describe('PokedekService', () => {
  let service: PokedekService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, Interceptor],
      providers: [PokedekService],
    });
    service = TestBed.inject(PokedekService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return data, get name and id', (done) => {
    service.getPokemon(2).subscribe((data: PokemonModel) => {
      expect(data.name).toEqual('ivysaur');
      expect(data.id).toEqual(2);
      done();
    });
  });
});
