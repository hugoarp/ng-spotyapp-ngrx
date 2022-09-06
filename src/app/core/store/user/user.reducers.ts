import { createReducer, on } from '@ngrx/store';
import { UserInfoState } from 'src/app/core/interfaces/user';
import { loadedUserDetails, loadUserDetails } from './user.actions';

export const initialUserInfoState: UserInfoState = {
  loading: false,
  user: { name: '', image: '' },
};

export const userInfoReducer = createReducer(
  initialUserInfoState,
  on(loadUserDetails, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedUserDetails, (state, { userInfo }) => {
    return { ...state, loading: false, user: userInfo };
  })
);
