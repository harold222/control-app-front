import { IStationsAndSchedule } from '../../../../../shared/services/station/model/IStationsAndSchedule';

export interface InterfaceFaultState {
    loading: boolean;
    stations: IStationsAndSchedule[];
}