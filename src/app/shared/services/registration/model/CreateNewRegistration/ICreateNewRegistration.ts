import { InterfaceUser } from '../../../../../pages/admin/store/interfaces/InterfaceUser';

export interface ICreateNewRegistration {
    history: string;
    status: boolean;
    users: InterfaceUser[];
}