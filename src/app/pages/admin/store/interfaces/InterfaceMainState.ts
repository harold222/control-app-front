import { InterfaceUserInfo } from './InterfaceUserInfo';
import { InterfaceStations } from './InterfaceStations';
import { InterfaceUser } from './InterfaceUser';
import { IRecord } from '../../../../shared/services/record/model/IRecord';

export interface InterfaceMainState {
    loading: boolean;
    user: InterfaceUserInfo;
    typeOfSchedule: string;
    stations: InterfaceStations[];
    usersByStations: InterfaceUser[];
    idSelectedStation: string;
    currentRecord: IRecord;
}