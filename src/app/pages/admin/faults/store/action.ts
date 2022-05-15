import { createAction, props } from '@ngrx/store';
import { IStationsAndSchedule } from '../../../../shared/services/station/model/IStationsAndSchedule';

export const SET_LOADING: string = '[MAIN] SET_LOADING';

export const GET_STATIONS: string = '[FAULTS] GET_STATIONS';
export const SET_STATIONS: string = '[FAULTS] SET_STATIONS';


export const setLoading = createAction(SET_LOADING, props<{ loading: boolean }>());
export const getStations = createAction(GET_STATIONS);
export const setStations = createAction(SET_STATIONS, props<{ stations: IStationsAndSchedule[] }>());