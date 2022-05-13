import { createAction, props } from '@ngrx/store';
import { InterfaceUserInfo } from './interfaces/InterfaceUserInfo';
import { InterfaceStations } from './interfaces/InterfaceStations';
import { InterfaceUser } from './interfaces/InterfaceUser';
import { IRecord } from '../../../shared/services/record/model/IRecord';

export const SET_LOADING: string = '[MAIN] SET_LOADING';

export const SET_USER_INFO: string = '[MAIN] SET_USER_INFO';

export const GET_TYPE_OF_SCHEDULE: string = '[MAIN] GET_TYPE_OF_SCHEDULE';
export const SET_TYPE_OF_SCHEDULE: string = '[MAIN] SET_TYPE_OF_SCHEDULE';

export const GET_STATIONS: string = '[REGISTER] GET_STATIONS';
export const SET_STATIONS: string = '[REGISTER] SET_STATIONS';

export const SET_USERS_BY_STATIONS: string = '[REGISTER] SET_USERS_BY_STATIONS';
export const GET_USERS_BY_STATIONS: string = '[REGISTER] GET_USERS_BY_STATIONS';

export const SET_SELECTED_STATION: string = '[REGISTER] SET_SELECTED_STATION';
export const GET_RECORD_BY_SUPERVISOR: string = '[REGISTER] GET_RECORD_BY_SUPERVISOR';

export const SET_CURRENT_RECORD: string = '[REGISTER] SET_CURRENT_RECORD';


export const setLoading = createAction(SET_LOADING, props<{ loading: boolean }>());
export const setUserInfo = createAction(SET_USER_INFO, props<{ user: InterfaceUserInfo }>());
export const setTypeOfSchedule = createAction(SET_TYPE_OF_SCHEDULE, props<{ schedule: string }>());
export const getStations = createAction(GET_STATIONS);
export const setStations = createAction(SET_STATIONS, props<{ stations: InterfaceStations[] }>());
export const setUsersByStations = createAction(SET_USERS_BY_STATIONS, props<{ usersByStations: InterfaceUser[] }>());
export const getUsersByStations = createAction(GET_USERS_BY_STATIONS, props<{ idStation: string }>());
export const setIdSelectedStation = createAction(SET_SELECTED_STATION, props<{ idSelectedStation: string }>());
export const getRecordBySupervisor = createAction(GET_RECORD_BY_SUPERVISOR, props<{ idSupervisor: string, idStation: string }>());
export const setCurrentRecord = createAction(SET_CURRENT_RECORD, props<{ record: IRecord }>());