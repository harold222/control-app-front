import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { InterfaceErrorModal } from '../store/model/interface';
import * as actions from '../store/action'
import * as selectors from '../store/selector'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorModalService {

  constructor(private store: Store<InterfaceErrorModal>) {}

  public clearErrors = (): void => this.store.dispatch(actions.clearErrors());

  public selectErrors = (): Observable<string> => this.store.select(selectors.selectErrors);

  public selectModal = (): Observable<boolean> => this.store.select(selectors.selectModal);

  public setError = (error: string): void => this.store.dispatch(actions.setError({ error }));

  public setModal = (open: boolean): void => this.store.dispatch(actions.setModal({ open }));
}
