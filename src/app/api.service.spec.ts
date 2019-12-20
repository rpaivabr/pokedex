import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {

  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.get(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all 251 pokemons', async (done) => {
    service.getPokemonData().subscribe(data => {
      expect(data.length).toBe(251);
      done();
    });
  });

  it('should return Pikachu by Id #25', async (done) => {
    service.getPokemonByNumber(25).subscribe((data: any) => {
      expect(data.Number).toBe('025');
      expect(data.Name).toBe('Pikachu');
      done();
    });
  });
});
