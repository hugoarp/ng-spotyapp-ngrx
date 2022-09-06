import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { loadedUserDetails, loadUserDetails } from './user.actions';

@Injectable()
export class UserInfoEffects {
  constructor(private spotify: SpotifyService, private actions$: Actions) {}

  loadUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserDetails.type),
      mergeMap(() =>
        this.spotify.getCurrentUser().pipe(
          map((userInfo) => ({
            type: loadedUserDetails.type,
            userInfo,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
