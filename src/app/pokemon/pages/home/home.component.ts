import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Pokemon } from '../../models/pokemon.model';
import { AppState } from '../../state/app.state';
import { loadPokemons } from '../../state/pokemon/pokemon.actions';
import { selectAllPokemons } from '../../state/pokemon/pokemon.selectors';
import { selectPokemonsStatus } from './../../state/pokemon/pokemon.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading$!: Observable<boolean>;
  pokemons$!: Observable<Array<Pokemon>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectPokemonsStatus);
    this.pokemons$ = this.store.select(selectAllPokemons);
    this.store.dispatch(loadPokemons());
  }

}
