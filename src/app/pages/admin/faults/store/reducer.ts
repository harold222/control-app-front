import { InterfaceFaultState } from './interfaces/InterfaceFaultState';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './action';
import { IStationsAndSchedule } from '../../../../shared/services/station/model/IStationsAndSchedule';

export const initialFaultState: InterfaceFaultState = {
    loading: false,
    stations: []
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
)


export function reducer(state: InterfaceFaultState | undefined, action: Action): InterfaceFaultState {
    return Fault(state, action);
}