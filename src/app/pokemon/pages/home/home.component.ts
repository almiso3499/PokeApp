import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';

import { AppState } from '../../state/app.state';
import { loadPokemons } from '../../state/pokemon/pokemon.actions';
import { selectAllPokemons } from '../../state/pokemon/pokemon.selectors';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true)
  pokemons!: Observable<Array<Pokemon>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.pokemons = this.store.select(selectAllPokemons);
    this.store.dispatch(loadPokemons());
    this.isLoading$.next(false); // TO DO isLoading with state 
  }

}
