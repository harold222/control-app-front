import { InterfaceUser } from '../../../../../pages/admin/store/interfaces/InterfaceUser';

export interface IGetOperatorsByStationResponse {
    status: boolean;
    operators: InterfaceUser[];
}