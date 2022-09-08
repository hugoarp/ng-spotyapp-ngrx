import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import { EMPTY, take } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import {
  addFavoriteTrack,
  addTrackToState,
  loadedFavoritesTracks,
  loadFavoritesTracks,
  removeFavoriteTrack,
  removeTrackFromState,
} from './favorites.actions';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable()
export class FavoritesTracksInfoEffects {
  constructor(
    private spotify: SpotifyService,
    private actions$: Actions,
    private toast: HotToastService
  ) {}

  loadFavoritesTracks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFavoritesTracks.type),
      mergeMap(() =>
        this.spotify.getUserFavorites().pipe(
          map((trackInfo) => ({
            type: loadedFavoritesTracks.type,
            trackInfo,
          })),
          catchError(() => EMPTY)
        )
      ),
      take(1)
    )
  );

  saveFavoritesTracks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addFavoriteTrack),
      mergeMap(({ trackInfo }) =>
        this.spotify.saveFavoriteTrack(trackInfo.id).pipe(
          map(() => ({
            type: addTrackToState.type,
            trackInfo,
          })),
          tap(() => {
            if (!trackInfo.favorite) {
              this.toast.show('Añadido a favoritos', {
                icon: '💚',
                position: 'bottom-right',
              });
            } else {
              this.toast.show('Eliminado de favoritos', {
                icon: '💔',
                position: 'bottom-right',
              });
            }
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  removeFavoritesTracks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeFavoriteTrack),
      mergeMap(({ trackInfo }) =>
        this.spotify.deleteFavoriteTrack(trackInfo.id).pipe(
          map(() => ({
            type: removeTrackFromState.type,
            trackInfo,
          })),
          tap(() =>
            this.toast.show('Eliminado de favoritos', {
              icon: '💔',
              position: 'bottom-right',
            })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
