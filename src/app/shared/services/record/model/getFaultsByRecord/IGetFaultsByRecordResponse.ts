import { InterfaceRegistration } from './InterfaceRegistration';

export interface IGetFaultsByRecordResponse {
    status: boolean;
    registrations: InterfaceRegistration[];
}