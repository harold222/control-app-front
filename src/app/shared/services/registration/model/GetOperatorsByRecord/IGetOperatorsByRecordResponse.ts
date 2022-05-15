import { InterfaceUser } from '../../../../../pages/admin/store/interfaces/InterfaceUser';

export interface IGetOperatorsByRecordResponse {
    status: true;
    allUsers: InterfaceUser[];
}