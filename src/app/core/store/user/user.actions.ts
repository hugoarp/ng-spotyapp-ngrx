import { createAction, props } from '@ngrx/store';
import { UserInfo } from 'src/app/core/interfaces/user';

export const loadUserDetails = createAction('[User] Load user details');

export const loadedUserDetails = createAction(
  '[User] Load user detail success',
  props<{ userInfo: UserInfo }>()
);
