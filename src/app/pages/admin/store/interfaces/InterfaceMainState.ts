import { InterfaceUserInfo } from './InterfaceUserInfo';
import { InterfaceStations } from './InterfaceStations';

export interface InterfaceMainState {
    loading: boolean;
    user: InterfaceUserInfo;
    typeOfSchedule: string;
    stations: InterfaceStations[];
}