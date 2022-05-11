import { InterfaceStations } from '../../../../pages/admin/store/interfaces/InterfaceStations';

export interface IgetStationsBySupervisorResponse {
    status: boolean;
    stations: InterfaceStations[];
}