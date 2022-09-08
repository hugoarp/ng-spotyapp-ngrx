import { createReducer, on } from '@ngrx/store';
import { TrackInfo, TrackInfoState } from '../../interfaces/track';
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
    const isTrackInState = state.tracks.some(
      (track) => track.id === trackInfo.id
    );
    if (isTrackInState) {
      return removeTrack(state, trackInfo);
    }
    const newTrack = { ...trackInfo, favorite: !trackInfo.favorite };
    

    return { ...state, tracks: [...state.tracks, newTrack] };
  }),
  on(removeTrackFromState, (state, { trackInfo }) =>
    removeTrack(state, trackInfo)
  )
);

const removeTrack = (state: TrackInfoState, trackInfo: TrackInfo) => {
  return {
    ...state,
    tracks: state.tracks.filter((track) => track.id !== trackInfo.id),
  };
};
