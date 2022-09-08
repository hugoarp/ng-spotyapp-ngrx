import { createAction, props } from '@ngrx/store';
import { TrackInfo } from '../../interfaces/track';

export const loadRecommendedTracks = createAction(
  '[Recommended] Load recommended tracks'
);

export const loadedRecommendedTracks = createAction(
  '[Recommended] Load recommended tracks success',
  props<{ trackInfo: TrackInfo[] }>()
);

export const toggleFavoriteTrack = createAction(
  '[Recommended] Toggle favorite track',
  props<{ trackInfo: TrackInfo }>()
);
