import { createSelector } from '@ngrx/store';
import { UserInfoState } from 'src/app/core/interfaces/user';
import { AppState } from '../app.state';

export const selectUserFeature = (state: AppState) => state.userInfo;

export const selectUser = createSelector(
  selectUserFeature,
  (state: UserInfoState) => state.user
);
