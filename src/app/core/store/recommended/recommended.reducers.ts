import { createReducer, on } from '@ngrx/store';
import { TrackInfoState } from '../../interfaces/track';
import {
  loadedRecommendedTracks,
  loadRecommendedTracks,
} from './recommended.actions';

export const initialRecommendedTrackInfoState: TrackInfoState = {
  loading: false,
  tracks: [],
};

export const recommendedTrackInfoReducer = createReducer(
  initialRecommendedTrackInfoState,
  on(loadRecommendedTracks, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedRecommendedTracks, (state, { trackInfo }) => {
    return { ...state, loading: false, tracks: trackInfo };
  })
);
