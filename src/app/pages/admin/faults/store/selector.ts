import { MemoizedSelector, createSelector } from '@ngrx/store';
import { InterfaceFaultState } from './interfaces/InterfaceFaultState';
import { IStationsAndSchedule } from '../../../../shared/services/station/model/IStationsAndSchedule';

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
