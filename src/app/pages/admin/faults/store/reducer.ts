import { InterfaceFaultState } from './interfaces/InterfaceFaultState';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './action';
import { IStationsAndSchedule } from '../../../../shared/services/station/model/IStationsAndSchedule';
import { InterfaceUser } from '../../store/interfaces/InterfaceUser';
import { InterfaceRegistration } from '../../../../shared/services/record/model/getFaultsByRecord/InterfaceRegistration';

export const initialFaultState: InterfaceFaultState = {
    loading: false,
    stations: [],
    usersByStation: [],
    recordsByUser: [],
    userWithoutRecords: false
}

export const Fault = createReducer(
    initialFaultState,
    on(actions.setLoading, (state: InterfaceFaultState, action: { loading: boolean }) => {
        const newState: InterfaceFaultState = {...state};
        newState.loading = action.loading;
        return newState;
    }),
    on(actions.setStations, (state: InterfaceFaultState, action: { stations: IStationsAndSchedule[] }) => {
        const newState: InterfaceFaultState = {...state};
        newState.stations = action.stations;
        return newState;
    }),
    on(actions.setUsersByStation, (state: InterfaceFaultState, action: { users: InterfaceUser[] }) => {
        const newState: InterfaceFaultState = {...state};
        newState.usersByStation = action.users;
        return newState;
    }),
    on(actions.setRecordsByUser, (state: InterfaceFaultState, action: { registrations: InterfaceRegistration[] }) => {
        const newState: InterfaceFaultState = {...state};
        newState.recordsByUser = action.registrations;
        return newState;
    }),
    on(actions.setUserWithoutRecords, (state: InterfaceFaultState, action: { state: boolean }) => {
        const newState: InterfaceFaultState = {...state};
        newState.userWithoutRecords = action.state;
        return newState;
    }),
)


export function reducer(state: InterfaceFaultState | undefined, action: Action): InterfaceFaultState {
    return Fault(state, action);
}