import { createSelector, MemoizedSelector } from '@ngrx/store';
import { InterfaceMainState } from './interfaces/InterfaceMainState';
import { InterfaceUserInfo } from './interfaces/InterfaceUserInfo';

export const selectAdminState = (state: any) => (
    state.Main
);

export const selectLoading: MemoizedSelector<InterfaceMainState, boolean> =
    createSelector(
        selectAdminState,
        (mainState: InterfaceMainState) => mainState.loading);

export const selectUserInfo: MemoizedSelector<InterfaceMainState, InterfaceUserInfo> =
    createSelector(
        selectAdminState,
        (mainState: InterfaceMainState) => mainState.user);