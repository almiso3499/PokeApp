import { createReducer, on } from '@ngrx/store';
import { addPokemon, loadPokemons, loadPokemonsFailure, loadPokemonsSuccess, removePokemon } from './pokemon.actions';

import { Pokemon } from '../../models/pokemon.model';

export interface PokemonState {
    Pokemons: Pokemon[];
    error: string;
    isLoading: boolean;
}

export const initialState: PokemonState = {
    Pokemons: [],
    error: '',
    isLoading: false
};

export const PokemonReducer = createReducer(
    // Supply the initial state
    initialState,
    // Add the new Pokemon to the Pokemons array
    on(addPokemon, (state, { pokemon }) => ({
        ...state,
        Pokemons: [...state.Pokemons, pokemon],
    })),
    // Remove the Pokemon from the Pokemons array
    on(removePokemon, (state, { id }) => ({
        ...state,
        Pokemons: state.Pokemons.filter((Pokemon) => Pokemon.id !== id),
    })),
    // Trigger loading the Pokemons
    on(loadPokemons, (state) => ({ ...state, isLoading: true })),
    // Handle successfully loaded Pokemons
    on(loadPokemonsSuccess, (state, { pokemons }) => ({
        ...state,
        Pokemons: pokemons,
        error: '',
        isLoading: false,
    })),
    // Handle Pokemons load failure
    on(loadPokemonsFailure, (state, { error }) => ({
        ...state,
        error: error,
        isLoading: false,
    }))
);