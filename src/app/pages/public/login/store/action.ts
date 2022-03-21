import { createAction, props } from '@ngrx/store';

export const SET_LOADING: string = '[LOGIN] SET_LOADING';

export const setLoading = createAction(SET_LOADING, props<{ loading: boolean }>());