import { MemoizedSelector, createSelector } from '@ngrx/store';
import { InterfaceFaultState } from './interfaces/InterfaceFaultState';
import { IStationsAndSchedule } from '../../../../shared/services/station/model/IStationsAndSchedule';
import { InterfaceUser } from '../../store/interfaces/InterfaceUser';
import { InterfaceRegistration } from '../../../../shared/services/record/model/getFaultsByRecord/InterfaceRegistration';

export const selectFaultState = (state: any) => (
    state.Fault
);

export const selectLoading: MemoizedSelector<InterfaceFaultState, boolean> =
    createSelector(
        selectFaultState,
        (mainState: InterfaceFaultState) => mainState.loading);

export const selectStations: MemoizedSelector<InterfaceFaultState, IStationsAndSchedule[]> =
    createSelector(
        selectFaultState,
        (mainState: InterfaceFaultState) => mainState.stations);

export const selectUsersByStation: MemoizedSelector<InterfaceFaultState, InterfaceUser[]> =
    createSelector(
        selectFaultState,
        (mainState: InterfaceFaultState) => mainState.usersByStation);

export const selectRecordsByUser: MemoizedSelector<InterfaceFaultState, InterfaceRegistration[]> =
    createSelector(
        selectFaultState,
        (mainState: InterfaceFaultState) => mainState.recordsByUser);

export const selectUserWithoutRecords: MemoizedSelector<InterfaceFaultState, boolean> =
    createSelector(
        selectFaultState,
        (mainState: InterfaceFaultState) => mainState.userWithoutRecords);
