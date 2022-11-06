import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonResponse } from './../models/pokemons.response.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>('/assets/pokemons.json');
  }
}
