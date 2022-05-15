import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { InterfaceFaultState } from '../store/interfaces/InterfaceFaultState';
import * as actions from '../store/action';
import * as selectors from '../store/selector';
import { Observable } from 'rxjs';

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
}