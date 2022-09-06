import { ActionReducerMap } from '@ngrx/store';
import { TrackInfoState } from '../interfaces/track';
import { UserInfoState } from '../interfaces/user';
import { favoritesTrackInfoReducer } from './favorites/favorites.reducers';
import { recommendedTrackInfoReducer } from './recommended/recommended.reducers';
import { userInfoReducer } from './user/user.reducers';

export interface AppState {
  userInfo: UserInfoState;
  recommendedTrackInfo: TrackInfoState;
  favoritesTrackInfo: TrackInfoState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  userInfo: userInfoReducer,
  recommendedTrackInfo: recommendedTrackInfoReducer,
  favoritesTrackInfo: favoritesTrackInfoReducer,
};
