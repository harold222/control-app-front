import { createSelector, MemoizedSelector } from '@ngrx/store';
import { InterfaceLoginState } from './interfaces/InterfaceLoginState';

export const selectAdminState = (state: any) => (
    state.Login
);

export const selectLoading: MemoizedSelector<InterfaceLoginState, boolean> =
    createSelector(
        selectAdminState,
        (adminState: InterfaceLoginState) => adminState.loading);