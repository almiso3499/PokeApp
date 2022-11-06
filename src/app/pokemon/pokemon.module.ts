import { MaterialModule } from './../material.module';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PokemonsRoutingModule } from './pokemon-routing.module';
import { PokemonReducer } from './state/pokemon/pokemon.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PokemonsEffects } from './state/pokemon/pokemon.effects';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MaterialModule,
    StoreModule.forFeature('pokemons', PokemonReducer),
    EffectsModule.forFeature([PokemonsEffects])
  ]
})
export class PokemonModule { }
