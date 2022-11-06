import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../../models/pokemon.model';

export const addPokemon = createAction(
    '[Pokemon Page] Add Pokemon',
    props<{ pokemon: Pokemon }>()
);

export const removePokemon = createAction(
    '[Pokemon Page] Remove Pokemon',
    props<{ id: number }>()
);

export const loadPokemons = createAction('[Todo Pokemon] Load Pokemons');

export const loadPokemonsSuccess = createAction(
    '[Pokemon API] Pokemon Load Success',
    props<{ pokemons: Pokemon[] }>()
);

export const loadPokemonsFailure = createAction(
    '[Pokemon API] Pokemon Load Failure',
    props<{ error: string }>()
);

export const dummyAction = createAction('[dummy action]');