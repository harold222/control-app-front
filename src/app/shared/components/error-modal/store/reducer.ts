import { Action, createReducer, on } from '@ngrx/store';
import * as errorActions from './action';
import { InterfaceErrorModal } from './index';

export const initialErrorModalState: InterfaceErrorModal = {
    errors: [],
    modal:  false,
};

export const errorReducer = createReducer(
    initialErrorModalState,
    on(errorActions.setError, (state: InterfaceErrorModal, action: { errorCode: number }) => {
        const newState: InterfaceErrorModal = { ...state};
        const errors: number[] = [...newState.errors];
        errors.push(action.errorCode);
        newState.errors = [...errors];
        return newState;
    }),
    on(errorActions.clearErrors, (state: InterfaceErrorModal) => {
        const newState: InterfaceErrorModal = { ...state};
        newState.errors = [...[]];
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
