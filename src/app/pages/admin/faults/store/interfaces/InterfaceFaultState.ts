import { IStationsAndSchedule } from '../../../../../shared/services/station/model/IStationsAndSchedule';
import { InterfaceUser } from '../../../store/interfaces/InterfaceUser';
import { InterfaceRegistration } from '../../../../../shared/services/record/model/getFaultsByRecord/InterfaceRegistration';

export interface InterfaceFaultState {
    loading: boolean;
    stations: IStationsAndSchedule[];
    usersByStation: InterfaceUser[];
    recordsByUser: InterfaceRegistration[];
    userWithoutRecords: boolean;
}