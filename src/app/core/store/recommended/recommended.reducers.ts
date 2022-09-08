import { createReducer, on } from '@ngrx/store';
import { TrackInfoState } from '../../interfaces/track';
import {
  loadedRecommendedTracks,
  loadRecommendedTracks,
  toggleFavoriteTrack,
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
  }),
  on(toggleFavoriteTrack, (state, { trackInfo }) => {
    const tracks = state.tracks.filter((track) => track.id !== trackInfo.id);

    const newTrack = { ...trackInfo, favorite: !trackInfo.favorite };
    const index = state.tracks.findIndex((track) => track.id === trackInfo.id);

    tracks.splice(index, 0, newTrack);

    return { ...state, tracks };
  })
);
