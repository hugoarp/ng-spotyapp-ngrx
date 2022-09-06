import { createSelector } from '@ngrx/store';
import { TrackInfoState } from '../../interfaces/track';
import { AppState } from '../app.state';

export const selectRecommendedTracksFeature = (state: AppState) =>
  state.recommendedTrackInfo;

export const selectRecommendedTracks = createSelector(
  selectRecommendedTracksFeature,
  (state: TrackInfoState) => state.tracks
);

export const selectRecommendedTracksLoading = createSelector(
  selectRecommendedTracksFeature,
  (state: TrackInfoState) => state.loading
);
