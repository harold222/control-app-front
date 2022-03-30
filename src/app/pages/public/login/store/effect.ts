import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, Observable, catchError, of, tap, throwError } from 'rxjs';
import * as actions from './action';
import { LoginService } from '../../../../shared/services/login/login.service';
import { GENERATE_LOADING, setLogin } from './action';
import { LoginStoreService } from '../service/login.store.service';
import { IgenerateLoginResponse } from '../../../../shared/services/login/model/generateLogin/IgenerateLoginResponse';

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
                            // CREAR MODAL INFORMACION o toast DEL ERROR QUE SE GENERO error.error.errors.msg
                            this.loginStoreService.setLoading(false);
                            return throwError(error);
                        })
                    )
            ),
            map((response: IgenerateLoginResponse) => {
                console.log('response: ', response)
                this.loginStoreService.setLoading(false);
                return setLogin()
            }),
        )
    );

    constructor(
        private actions$: Actions,
        private loginService: LoginService,
        private loginStoreService: LoginStoreService
    ) {}
}