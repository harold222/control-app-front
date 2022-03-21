import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { InterfaceLoginState } from '../store/interfaces/InterfaceLoginState';
import * as actions from '../store/action';
import * as selectors from '../store/selector'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginStoreService {

    constructor(private store: Store<InterfaceLoginState>) {}

    public setLoading = (loading: boolean): void => this.store.dispatch(actions.setLoading({ loading }));

    public selectLoading = (): Observable<boolean> => this.store.select(selectors.selectLoading);
}