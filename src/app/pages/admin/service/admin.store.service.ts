import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { InterfaceMainState } from '../store/interfaces/InterfaceMainState';
import * as actions from '../store/action';
import * as selectors from '../store/selector'
import { Observable } from 'rxjs';
import { InterfaceUserInfo } from '../store/interfaces/InterfaceUserInfo';
import { InterfaceUser } from '../store/interfaces/InterfaceUser';
import { IGetOperatorsByRecordRequest } from '../../../shared/services/registration/model/GetOperatorsByRecord/IGetOperatorsByRecordRequest';
import { IUpdateStateRecordAndHistoryRequest } from 'src/app/shared/services/record/model/updateStateRecordAndHistory/IUpdateStateRecordAndHistoryRequest';
import { IRecord } from '../../../shared/services/record/model/IRecord';
import { IUpdateOpeningTimeRequest } from '../../../shared/services/registration/model/updateOpeningTime/IUpdateOpeningTimeRequest';
import { IStationsAndSchedule } from '../../../shared/services/station/model/IStationsAndSchedule';

@Injectable({
    providedIn: 'root',
})
export class AdminStoreService {

    constructor(private store: Store<InterfaceMainState>) {}

    public setLoading = (loading: boolean): void =>
        this.store.dispatch(actions.setLoading({ loading }));

    public selectLoading = (): Observable<boolean> =>
        this.store.select(selectors.selectLoading);

    public setUserInfo = (user: InterfaceUserInfo): void =>
        this.store.dispatch(actions.setUserInfo({ user }))

    public selectUserInfo = (): Observable<InterfaceUserInfo> =>
        this.store.select(selectors.selectUserInfo);

    public setTypeOfSchedule = (schedule: string): void =>
        this.store.dispatch(actions.setTypeOfSchedule({ schedule }))

    public selectTypeOfSchedule = (): Observable<string> =>
        this.store.select(selectors.selectTypeOfSchedule);

    public getStations = () => this.store.dispatch(actions.getStations());

    public selectStations = () => this.store.select(selectors.selectStations);

    public selectUsersByStations = () => this.store.select(selectors.selectUsersByStations);

    public setUsersByStations = (usersByStations: InterfaceUser[]) =>
        this.store.dispatch(actions.setUsersByStations({ usersByStations }));

    public getUsersByStation = (idStation: string) =>
        this.store.dispatch(actions.getUsersByStations({ idStation }));
    
    public setIdSelectedStation = (idSelectedStation: string) =>
        this.store.dispatch(actions.setIdSelectedStation({ idSelectedStation }));

    public selectIdSelectedStation = () => this.store.select(selectors.selectIdSelectedStation);

    public getRecordBySupervisor = (idSupervisor: string, idStation: string) =>
        this.store.dispatch(actions.getRecordBySupervisor({ idSupervisor, idStation }));

    public selectCurrentRecord = () => this.store.select(selectors.selectCurrentRecord);

    public getOperatorsByRecord = (request: IGetOperatorsByRecordRequest) =>
        this.store.dispatch(actions.getOperatorsByRecord({ request }));

    public updateStateRecordAndHistory = (request: IUpdateStateRecordAndHistoryRequest) =>
        this.store.dispatch(actions.updateStateRecordAndHistory({ request }));

    public setCurrentRecord = (record: IRecord) => 
        this.store.dispatch(actions.setCurrentRecord({ record }));

    public selectSelectedOperator = () => this.store.select(selectors.selectCurrentOperator);

    public getSelectedOperator = (id: string) => this.store.dispatch(actions.getSelectedOperator({ id }));

    public updateOpeningTime = (request: IUpdateOpeningTimeRequest) =>
        this.store.dispatch(actions.updateOpeningTime({ request }));

    public updateClosingTime = (request: IUpdateOpeningTimeRequest) =>
        this.store.dispatch(actions.updateClosingTime({ request }));

    public setStations = (stations: IStationsAndSchedule[]) =>
        this.store.dispatch(actions.setStations({ stations }));
}