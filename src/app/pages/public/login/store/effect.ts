import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, Observable, catchError, of, tap, throwError } from 'rxjs';
import * as actions from './action';
import { LoginService } from '../../../../shared/services/login/login.service';
import { GENERATE_LOADING, setLogin } from './action';
import { LoginStoreService } from '../service/login.store.service';
import { IgenerateLoginResponse } from '../../../../shared/services/login/model/generateLogin/IgenerateLoginResponse';
import { InformationModalService } from '../../../../shared/components/information-modal/service/information-modal.service';

@Injectable()
export class LoginEffects {

    public generateLogin$ =
        createEffect(() => this.actions$.pipe(
            ofType(actions.generateLogin),
            tap(() => this.loginStoreService.setLoading(true)),
            mergeMap((action: { email: string, pass: string, type: string }) => 
                this.loginService.generateLogin({ email: action.email, password: action.pass })
                    .pipe(
                        catchError(error => {
                            this.informationModalService.setInformation('Error al iniciar sesion', error.error.errors[0].msg);
                            this.informationModalService.setModal(true);
                            this.loginStoreService.setLoading(false);
                            return throwError(error);
                        })
                    )
            ),
            tap((response: IgenerateLoginResponse) => {
                if (response.status && response.token) {
                    const atob = window.atob(response.token.split('.')[1]);
                    if (atob) {
                        localStorage.setItem('token', response.token);
                        localStorage.setItem('userInformation', atob);

                        this.loginStoreService.setLoading(false);
                        // hacer una redireccion al modulo privado
                    }
                } else
                    this.loginStoreService.setLoading(false);
            })
        ), { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private loginService: LoginService,
        private loginStoreService: LoginStoreService,
        private informationModalService: InformationModalService
    ) {}
}