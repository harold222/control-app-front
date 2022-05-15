import { InterfaceStations } from '../../../../pages/admin/store/interfaces/InterfaceStations';
import { IStationsAndSchedule } from './IStationsAndSchedule';

export interface IgetStationsBySupervisorResponse {
    status: boolean;
    stations: IStationsAndSchedule[];
}