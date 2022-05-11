import { createSelector } from '@ngrx/store';
import { InterfaceErrorModal } from './index';

export const selectErrorModalState = (state: any) => (
    state.ErrorModal
);

export const selectModal = createSelector(
    selectErrorModalState,
    (errorModalState: InterfaceErrorModal) => errorModalState.modal);
    
export const selectErrors = createSelector(
    selectErrorModalState, (errorModalState: InterfaceErrorModal) => errorModalState.error);
