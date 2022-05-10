import { createAction, props } from '@ngrx/store';
import { InterfaceUserInfo } from './interfaces/InterfaceUserInfo';

export const SET_LOADING: string = '[MAIN] SET_LOADING';
export const SET_USER_INFO: string = '[MAIN] SET_USER_INFO';
export const GET_USER_INFO: string = '[MAIN] GET_USER_INFO';

export const setLoading = createAction(SET_LOADING, props<{ loading: boolean }>());
export const setUserInfo = createAction(SET_USER_INFO, props<{ user: InterfaceUserInfo }>());
export const getUserInfo = createAction(GET_USER_INFO);