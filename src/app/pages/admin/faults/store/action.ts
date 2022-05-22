import { createAction, props } from '@ngrx/store';
import { IStationsAndSchedule } from '../../../../shared/services/station/model/IStationsAndSchedule';
import { InterfaceUser } from '../../store/interfaces/InterfaceUser';
import { IGetFaultsByRecordRequest } from '../../../../shared/services/record/model/getFaultsByRecord/IGetFaultsByRecordRequest';
import { InterfaceRegistration } from '../../../../shared/services/record/model/getFaultsByRecord/InterfaceRegistration';

export const SET_LOADING: string = '[MAIN] SET_LOADING';

export const GET_STATIONS: string = '[FAULTS] GET_STATIONS';
export const SET_STATIONS: string = '[FAULTS] SET_STATIONS';

export const GET_USER_BY_STATIONS: string = '[FAULTS] GET_USER_BY_STATIONS';
export const SET_USER_BY_STATIONS: string = '[FAULTS] SET_USER_BY_STATIONS';

export const GET_RECORDS_BY_USER: string = '[FAULTS] GET_RECORDS_BY_USER';
export const SET_RECORDS_BY_USER: string = '[FAULTS] SET_RECORDS_BY_USER';

export const SET_USER_WITHOUT_RECORDS: string = '[FAULTS] SET_USER_WITHOUT_RECORDS'


export const setLoading = createAction(SET_LOADING, props<{ loading: boolean }>());
export const getStations = createAction(GET_STATIONS);
export const setStations = createAction(SET_STATIONS, props<{ stations: IStationsAndSchedule[] }>());
export const getUsersByStation = createAction(GET_USER_BY_STATIONS, props<{ idStation: string }>());
export const setUsersByStation = createAction(SET_USER_BY_STATIONS, props<{ users: InterfaceUser[] }>());
export const getRecordsByUser = createAction(GET_RECORDS_BY_USER, props<{ request: IGetFaultsByRecordRequest }>());
export const setRecordsByUser = createAction(SET_RECORDS_BY_USER, props<{ registrations: InterfaceRegistration[] }>());
export const setUserWithoutRecords = createAction(SET_USER_WITHOUT_RECORDS, props<{ state: boolean }>());