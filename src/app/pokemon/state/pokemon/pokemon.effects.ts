import { PokemonService } from './../../services/pokemon.service';
import { dummyAction, loadPokemons, loadPokemonsSuccess } from './pokemon.actions';
import { Store } from '@ngrx/store';
import {
  map,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AppState } from '../app.state';
import { selectPokemons } from './pokemon.selectors';

@Injectable()
export class PokemonsEffects {
  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService,
    private store: Store<AppState>
  ) {}

  loadPokemons$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPokemons),
      withLatestFrom(this.store.select(selectPokemons)),
      mergeMap(([action, pokemons]) => {
        if (!pokemons.Pokemons.length || pokemons.Pokemons.length === 1) {
          return this.pokemonService.getPokemons().pipe(
            map((response) => {
              const pokemons = response.pokemons;
              return loadPokemonsSuccess({ pokemons });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

//   addPost$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(addPost),
//       mergeMap((action) => {
//         return this.postsService.addPost(action.post).pipe(
//           map((data) => {
//             const post = { ...action.post, id: data.name };
//             return addPostSuccess({ post });
//           })
//         );
//       })
//     );
//   });

//   updatePost$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(updatePost),
//       switchMap((action) => {
//         return this.postsService.updatePost(action.post).pipe(
//           map((data) => {
//             const updatedPost: Update<Post> = {
//               id: action.post.id,
//               changes: {
//                 ...action.post,
//               },
//             };
//             return updatePostSuccess({ post: updatedPost });
//           })
//         );
//       })
//     );
//   });
//   deletePost$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(deletePost),
//       switchMap((action) => {
//         return this.postsService.deletePost(action.id).pipe(
//           map((data) => {
//             return deletePostSuccess({ id: action.id });
//           })
//         );
//       })
//     );
//   });

//   getSinglePost$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(ROUTER_NAVIGATION),
//       filter((r: RouterNavigatedAction) => {
//         return r.payload.routerState.url.startsWith('/posts/details');
//       }),
//       map((r: RouterNavigatedAction) => {
//         return r.payload.routerState['params']['id'];
//       }),
//       withLatestFrom(this.store.select(getPosts)),
//       switchMap(([id, posts]) => {
//         if (!posts.length) {
//           return this.postsService.getPostById(id).pipe(
//             map((post) => {
//               const postData = [{ ...post, id }];
//               return loadPostsSuccess({ posts: postData });
//             })
//           );
//         }
//         return of(dummyAction());
//       })
//     );
//   });
}