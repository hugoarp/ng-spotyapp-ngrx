import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import { EMPTY, take } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
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
      mergeMap(() =>
        this.spotify.getRecommendations().pipe(
          map((trackInfo) => ({
            type: loadedRecommendedTracks.type,
            trackInfo,
          })),
          catchError(() => EMPTY)
        )
      ),
      take(1)
    )
  );
}
