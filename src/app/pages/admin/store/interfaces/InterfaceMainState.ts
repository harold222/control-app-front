import { InterfaceUserInfo } from './InterfaceUserInfo';
import { InterfaceStations } from './InterfaceStations';
import { InterfaceUser } from './InterfaceUser';
import { IRecord } from '../../../../shared/services/record/model/IRecord';
import { IStationsAndSchedule } from '../../../../shared/services/station/model/IStationsAndSchedule';

export interface InterfaceMainState {
    loading: boolean;
    user: InterfaceUserInfo;
    typeOfSchedule: string;
    stations: IStationsAndSchedule[];
    usersByStations: InterfaceUser[];
    idSelectedStation: string;
    currentRecord: IRecord;
}