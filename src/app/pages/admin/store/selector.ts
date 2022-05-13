import { createSelector, MemoizedSelector } from '@ngrx/store';
import { InterfaceMainState } from './interfaces/InterfaceMainState';
import { InterfaceUserInfo } from './interfaces/InterfaceUserInfo';
import { InterfaceStations } from './interfaces/InterfaceStations';
import { InterfaceUser } from './interfaces/InterfaceUser';
import { IRecord } from '../../../shared/services/record/model/IRecord';

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

export const selectTypeOfSchedule: MemoizedSelector<InterfaceMainState, string> =
createSelector(
    selectAdminState,
    (mainState: InterfaceMainState) => mainState.typeOfSchedule);

export const selectStations: MemoizedSelector<InterfaceMainState, InterfaceStations[]> =
    createSelector(
        selectAdminState,
        (mainState: InterfaceMainState) => mainState.stations);

export const selectUsersByStations: MemoizedSelector<InterfaceMainState, InterfaceUser[]> =
    createSelector(
        selectAdminState,
        (mainState: InterfaceMainState) => mainState.usersByStations);

export const selectIdSelectedStation: MemoizedSelector<InterfaceMainState, string> =
    createSelector(
        selectAdminState,
        (mainState: InterfaceMainState) => mainState.idSelectedStation);

export const selectCurrentRecord: MemoizedSelector<InterfaceMainState, IRecord | null> =
    createSelector(
        selectAdminState,
        (mainState: InterfaceMainState) => mainState.currentRecord);