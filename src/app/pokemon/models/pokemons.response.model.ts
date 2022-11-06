import { Pokemon } from "./pokemon.model";

export class PokemonResponse {
    pokemons: Array<Pokemon>;

    constructor(init?: PokemonResponse | Partial<PokemonResponse>) {
        this.pokemons = new Array<Pokemon>;

        if (init == null) return;
        Object.assign(this, init);
    }
}