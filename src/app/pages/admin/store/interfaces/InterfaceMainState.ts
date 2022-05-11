import { InterfaceUserInfo } from './InterfaceUserInfo';
import { InterfaceStations } from './InterfaceStations';
import { InterfaceUser } from './InterfaceUser';

export interface InterfaceMainState {
    loading: boolean;
    user: InterfaceUserInfo;
    typeOfSchedule: string;
    stations: InterfaceStations[];
    usersByStations: InterfaceUser[];
}