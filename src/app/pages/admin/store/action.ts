import { createAction, props } from '@ngrx/store';
import { InterfaceUserInfo } from './interfaces/InterfaceUserInfo';
import { InterfaceStations } from './interfaces/InterfaceStations';
import { InterfaceUser } from './interfaces/InterfaceUser';
import { IRecord } from '../../../shared/services/record/model/IRecord';
import { IGetOperatorsByRecordRequest } from '../../../shared/services/registration/model/GetOperatorsByRecord/IGetOperatorsByRecordRequest';
import { IUpdateStateRecordAndHistoryRequest } from 'src/app/shared/services/record/model/updateStateRecordAndHistory/IUpdateStateRecordAndHistoryRequest';
import { IStationsAndSchedule } from '../../../shared/services/station/model/IStationsAndSchedule';
import { IUpdateOpeningTimeRequest } from '../../../shared/services/registration/model/updateOpeningTime/IUpdateOpeningTimeRequest';

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

export const GET_OPERATORS_BY_RECORD: string = '[REGISTER] GET_OPERATORS_BY_RECORD';

export const UPDATE_STATE_RECORD_AND_HISTORY: string = '[REGISTER] UPDATE_STATE_RECORD_AND_HISTORY';

export const SET_SELECTED_OPERATOR: string = '[REGISTER] SET_SELECTED_OPERATOR';
export const GET_SELECTED_OPERATOR: string = '[REGISTER] GET_SELECTED_OPERATOR';

export const UPDATE_OPENING_TIME: string = '[REGISTER-OPERATOR] UPDATE_OPENING_TIME';
export const UPDATE_CLOSING_TIME: string = '[REGISTER-OPERATOR] UPDATE_CLOSING_TIME';

export const setLoading = createAction(SET_LOADING, props<{ loading: boolean }>());
export const setUserInfo = createAction(SET_USER_INFO, props<{ user: InterfaceUserInfo }>());
export const setTypeOfSchedule = createAction(SET_TYPE_OF_SCHEDULE, props<{ schedule: string }>());
export const getStations = createAction(GET_STATIONS);
export const setStations = createAction(SET_STATIONS, props<{ stations: IStationsAndSchedule[] }>());
export const setUsersByStations = createAction(SET_USERS_BY_STATIONS, props<{ usersByStations: InterfaceUser[] }>());
export const getUsersByStations = createAction(GET_USERS_BY_STATIONS, props<{ idStation: string }>());
export const setIdSelectedStation = createAction(SET_SELECTED_STATION, props<{ idSelectedStation: string }>());
export const getRecordBySupervisor = createAction(GET_RECORD_BY_SUPERVISOR, props<{ idSupervisor: string, idStation: string }>());
export const setCurrentRecord = createAction(SET_CURRENT_RECORD, props<{ record: IRecord }>());
export const getOperatorsByRecord = createAction(GET_OPERATORS_BY_RECORD, props<{ request: IGetOperatorsByRecordRequest }>());
export const updateStateRecordAndHistory = createAction(UPDATE_STATE_RECORD_AND_HISTORY, props<{ request: IUpdateStateRecordAndHistoryRequest }>());
export const setSelectedOperator = createAction(SET_SELECTED_OPERATOR, props<{ operator: InterfaceUser }>());
export const getSelectedOperator = createAction(GET_SELECTED_OPERATOR, props<{ id: string }>());
export const updateOpeningTime = createAction(UPDATE_OPENING_TIME, props<{ request: IUpdateOpeningTimeRequest }>());
export const updateClosingTime = createAction(UPDATE_CLOSING_TIME, props<{ request: IUpdateOpeningTimeRequest }>());