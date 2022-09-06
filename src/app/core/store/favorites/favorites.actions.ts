import { createAction, props } from '@ngrx/store';
import { TrackInfo } from '../../interfaces/track';

export const loadFavoritesTracks = createAction(
  '[Favorites] Load favorites tracks'
);

export const loadedFavoritesTracks = createAction(
  '[Favorites] Load favorites tracks success',
  props<{ trackInfo: TrackInfo[] }>()
);

export const addFavoriteTrack = createAction(
  '[Favorites] Add favorite track',
  props<{ trackInfo: TrackInfo }>()
);

export const addTrackToState = createAction(
  '[Favorites] Add favorite track to state',
  props<{ trackInfo: TrackInfo }>()
);

export const removeFavoriteTrack = createAction(
  '[Favorites] Remove favorite track',
  props<{ trackInfo: TrackInfo }>()
);

export const removeTrackFromState = createAction(
  '[Favorites] Remove favorite track from state',
  props<{ trackInfo: TrackInfo }>()
);
