import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { InterfaceMainState } from '../store/interfaces/InterfaceMainState';
import * as actions from '../store/action';
import * as selectors from '../store/selector'
import { Observable } from 'rxjs';
import { InterfaceUserInfo } from '../store/interfaces/InterfaceUserInfo';

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
}