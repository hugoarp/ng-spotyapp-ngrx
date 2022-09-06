import { createSelector } from '@ngrx/store';
import { TrackInfoState } from '../../interfaces/track';
import { AppState } from '../app.state';

export const selectFavoritesTracksFeature = (state: AppState) =>
  state.favoritesTrackInfo;

export const selectFavoritesTracks = createSelector(
  selectFavoritesTracksFeature,
  (state: TrackInfoState) => state.tracks
);

export const selectFavoritesTracksLoading = createSelector(
  selectFavoritesTracksFeature,
  (state: TrackInfoState) => state.loading
);
