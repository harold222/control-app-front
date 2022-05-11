import { Action, createReducer, on } from '@ngrx/store';
import * as errorActions from './action';
import { InterfaceErrorModal } from './index';

export const initialErrorModalState: InterfaceErrorModal = {
    error: '',
    modal:  false,
};

export const errorReducer = createReducer(
    initialErrorModalState,
    on(errorActions.setError, (state: InterfaceErrorModal, action: { error: string }) => {
        const newState: InterfaceErrorModal = { ...state};
        newState.error = action.error;
        return newState;
    }),
    on(errorActions.clearErrors, (state: InterfaceErrorModal) => {
        const newState: InterfaceErrorModal = { ...state};
        newState.error = '';
        return newState;
    }),
    on(errorActions.setModal, (state: InterfaceErrorModal, action: { open: boolean }) => {
        const newState: InterfaceErrorModal = { ...state};
        newState.modal = action.open;
        return newState;
    }),
);

export function reducer(state: InterfaceErrorModal | undefined, action: Action): InterfaceErrorModal {
    return errorReducer(state, action);
}
