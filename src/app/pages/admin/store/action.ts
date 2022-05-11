import { createAction, props } from '@ngrx/store';
import { InterfaceUserInfo } from './interfaces/InterfaceUserInfo';
import { InterfaceStations } from './interfaces/InterfaceStations';

export const SET_LOADING: string = '[MAIN] SET_LOADING';

export const SET_USER_INFO: string = '[MAIN] SET_USER_INFO';

export const GET_TYPE_OF_SCHEDULE: string = '[MAIN] GET_TYPE_OF_SCHEDULE';
export const SET_TYPE_OF_SCHEDULE: string = '[MAIN] SET_TYPE_OF_SCHEDULE';

export const GET_STATIONS: string = '[REGISTER] GET_STATIONS';
export const SET_STATIONS: string = '[REGISTER] SET_STATIONS';

export const setLoading = createAction(SET_LOADING, props<{ loading: boolean }>());
export const setUserInfo = createAction(SET_USER_INFO, props<{ user: InterfaceUserInfo }>());
export const setTypeOfSchedule = createAction(SET_TYPE_OF_SCHEDULE, props<{ schedule: string }>());
export const getStations = createAction(GET_STATIONS);
export const setStations = createAction(SET_STATIONS, props<{ stations: InterfaceStations[] }>());