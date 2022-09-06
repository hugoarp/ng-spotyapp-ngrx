import { createReducer, on } from '@ngrx/store';
import { TrackInfoState } from '../../interfaces/track';
import {
  addTrackToState,
  loadedFavoritesTracks,
  loadFavoritesTracks,
  removeTrackFromState,
} from './favorites.actions';

export const initialFavoritesTrackInfoState: TrackInfoState = {
  loading: false,
  tracks: [],
};

export const favoritesTrackInfoReducer = createReducer(
  initialFavoritesTrackInfoState,
  on(loadFavoritesTracks, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedFavoritesTracks, (state, { trackInfo }) => {
    return { ...state, loading: false, tracks: trackInfo };
  }),
  on(addTrackToState, (state, { trackInfo }) => {
    return { ...state, tracks: [...state.tracks, trackInfo] };
  }),
  on(removeTrackFromState, (state, { trackInfo }) => {
    return {
      ...state,
      tracks: state.tracks.filter((track) => track.id !== trackInfo.id),
    };
  })
);
