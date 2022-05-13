import { InterfaceMainState } from './interfaces/InterfaceMainState';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './action';
import { InterfaceUserInfo } from './interfaces/InterfaceUserInfo';
import { InterfaceStations } from './interfaces/InterfaceStations';
import { InterfaceUser } from './interfaces/InterfaceUser';
import { IRecord } from '../../../shared/services/record/model/IRecord';

export const initialMainState: InterfaceMainState = {
    loading: true,
    user: {
        email: '',
        exp: 0,
        id: '',
        image: '',
        lastname: '',
        name: '',
        rol: ''
    },
    typeOfSchedule: '',
    stations: [],
    usersByStations: [],
    idSelectedStation: '',
    currentRecord: null
}

export const Main = createReducer(
    initialMainState,
    on(actions.setLoading, (state: InterfaceMainState, action: { loading: boolean }) => {
        const newState: InterfaceMainState = {...state};
        newState.loading = action.loading;
        return newState;
    }),
    on(actions.setUserInfo, (state: InterfaceMainState, action: { user: InterfaceUserInfo }) => {
        const newState: InterfaceMainState = {...state};
        newState.user = action.user;
        return newState;
    }),
    on(actions.setTypeOfSchedule, (state: InterfaceMainState, action: { schedule: string }) => {
        const newState: InterfaceMainState = {...state};
        newState.typeOfSchedule = action.schedule;
        return newState;
    }),
    on(actions.setStations, (state: InterfaceMainState, action: { stations: InterfaceStations[] }) => {
        const newState: InterfaceMainState = {...state};
        newState.stations = action.stations;
        return newState;
    }),
    on(actions.setUsersByStations, (state: InterfaceMainState, action: { usersByStations: InterfaceUser[] }) => {
        const newState: InterfaceMainState = {...state};
        newState.usersByStations = action.usersByStations;
        return newState;
    }),
    on(actions.setIdSelectedStation, (state: InterfaceMainState, action: { idSelectedStation: string }) => {
        const newState: InterfaceMainState = {...state};
        newState.idSelectedStation = action.idSelectedStation;
        return newState;
    }),
    on(actions.setCurrentRecord, (state: InterfaceMainState, action: { record: IRecord }) => {
        const newState: InterfaceMainState = {...state};
        newState.currentRecord = action.record;
        return newState;
    }),
)

export function reducer(state: InterfaceMainState | undefined, action: Action): InterfaceMainState {
    return Main(state, action);
}