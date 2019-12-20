import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getPokemonData(): Observable<any> {
    return this.http.get<any>('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json');
  }

  getPokemonByNumber(id: number) {
    return this.http.get<any>('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
    .pipe(
      tap(data => console.log(data)),
      switchMap(data => data.filter(el => +el.Number === id))
    );
  }

}
