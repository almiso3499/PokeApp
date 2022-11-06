import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { PokemonState } from './pokemon.reducers';

export const selectPokemons = (state: AppState) => state.pokemons;
export const selectAllPokemons = createSelector(selectPokemons,(state: PokemonState) => state.Pokemons);
export const selectPokemonsStatus = createSelector(selectPokemons,(state: PokemonState) => state.isLoading)