import { createAction, props } from '@ngrx/store';

export const SET_INFORMATION: string = '[INFORMATION] SET_INFORMATION';
export const CLEAR_INFORMATION: string = '[INFORMATION] CLEAR_INFORMATION';
export const SET_MODAL: string = '[INFORMATION] SET_MODAL';

export const setInformation = createAction(SET_INFORMATION, props<{ title: string, message: string }>());
export const clearInformation = createAction(CLEAR_INFORMATION);
export const setModal = createAction(SET_MODAL, props<{ open: boolean }>());