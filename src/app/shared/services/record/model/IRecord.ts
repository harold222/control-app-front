export interface IRecord {
    _id: string,
    createdTime: string,
    idSupervisor: string,
    idStation: string,
    completedIngress: boolean,
    completedExit: boolean
}