import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import { EMPTY, take } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import {
  loadedRecommendedTracks,
  loadRecommendedTracks,
} from './recommended.actions';

@Injectable()
export class RecommendedTracksInfoEffects {
  constructor(private spotify: SpotifyService, private actions$: Actions) {}

  loadRecommendedTracks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRecommendedTracks.type),
      mergeMap(() => this.spotify.getRecommendations()),
      mergeMap((trackInfo) => {
        const ids = trackInfo.map((track) => track.id);
        return this.spotify.checkUserFavorites(ids).pipe(
          map((favorites) => {
            return trackInfo.map((track, index) => {
              track.favorite = favorites[index];
              return track;
            });
          }),
          map((trackInfo) => ({
            type: loadedRecommendedTracks.type,
            trackInfo,
          })),
          catchError(() => EMPTY)
        );
      }),
      take(1)
    )
  );
}

// switchMap((recommendations) => {

// }),

// return [loadedRecommendedTracks({ trackInfo })];
