import { createAction, props } from '@ngrx/store';

export const SET_LOADING: string = '[LOGIN] SET_LOADING';

export const GENERATE_LOADING: string = '[LOGIN] GENERATE_LOADING';
export const SET_LOGIN: string = '[LOGIN] SET_LOGIN';


export const setLoading = createAction(SET_LOADING, props<{ loading: boolean }>());
export const generateLogin = createAction(GENERATE_LOADING, props<{ email: string, pass: string }>());
export const setLogin = createAction(SET_LOGIN)