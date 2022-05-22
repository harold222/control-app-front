import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { InterfaceFaultState } from '../store/interfaces/InterfaceFaultState';
import * as actions from '../store/action';
import * as selectors from '../store/selector';
import { Observable } from 'rxjs';
import { IGetFaultsByRecordRequest } from '../../../../shared/services/record/model/getFaultsByRecord/IGetFaultsByRecordRequest';

@Injectable({
    providedIn: 'root',
})
export class FaultsStoreService {
    constructor(private store: Store<InterfaceFaultState>) {}

    public setLoading = (loading: boolean): void =>
        this.store.dispatch(actions.setLoading({ loading }));

    public selectLoading = (): Observable<boolean> =>
        this.store.select(selectors.selectLoading);

    public getStations = () => this.store.dispatch(actions.getStations());

    public selectStations = () => this.store.select(selectors.selectStations);

    public getUsersByStation = (idStation: string) =>
        this.store.dispatch(actions.getUsersByStation({ idStation }));

    public selectUsersByStation = () => this.store.select(selectors.selectUsersByStation);

    public getRecordsByUser = (request: IGetFaultsByRecordRequest) =>
        this.store.dispatch(actions.getRecordsByUser({ request }));

    public selectRecordsByUser = () => this.store.select(selectors.selectRecordsByUser);

    public setUserWithoutRecords = (state: boolean) =>
        this.store.dispatch(actions.setUserWithoutRecords({ state }));

    public selectUserWithoutRecords = () => this.store.select(selectors.selectUserWithoutRecords);
}