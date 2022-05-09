import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions, selectors } from '../store';
import { InterfaceInformationModal } from '../store/model/interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InformationModalService {

    constructor(private store: Store<InterfaceInformationModal>) {}

    public clearInformation = (): void => this.store.dispatch(actions.clearInformation());

    public selectInformation = (): Observable<{ title: string, message: string }> => this.store.select(selectors.selectInformation);

    public selectModal = (): Observable<boolean> => this.store.select(selectors.selectModal);

    public setInformation = (title: string, message: string): void => this.store.dispatch(actions.setInformation({ title, message }));

    public setModal = (open: boolean): void => this.store.dispatch(actions.setModal({ open }));

}