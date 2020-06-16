import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { Interceptor } from 'src/app/core/interceptor/interceptor.module';

import { PokemonModel } from './models/pokemon.model';
import { PokeApiService } from './poke-api.service';

describe('PokeApiService', () => {
  let service: PokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, Interceptor],
      providers: [PokeApiService],
    });
    service = TestBed.inject(PokeApiService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return data, get name and id', (done) => {
    service.getPokemon(2).subscribe((data) => {
      expect(data.name).toEqual('ivysaur');
      expect(data.id).toEqual(2);
      done();
    });
  });
});
