import { createSelector } from '@ngrx/store';
import { InterfaceInformationModal } from './index';

export const selectInformationModalState = (state: any) => (
    state.InformationModal
);

export const selectModal = createSelector(
    selectInformationModalState,
    (errorModalState: InterfaceInformationModal) => errorModalState.modal);
    
export const selectInformation = createSelector(
    selectInformationModalState, (errorModalState: InterfaceInformationModal) => errorModalState.information);