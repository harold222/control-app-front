import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, Observable } from 'rxjs';
import * as actions from './action';
import { LoginService } from '../../../../shared/services/login/login.service';
import { GENERATE_LOADING, setLogin } from './action';

@Injectable()
export class LoginEffects {

    public generateLogin$ =
        createEffect(() => this.actions$.pipe(
            ofType(actions.generateLogin),
            mergeMap((action: { email: string, pass: string, type: string }) => {
                const data = { email: action.email, pass: action.pass };
                return this.loginService.generateLogin(data)
            }),
            map((response: any) => {
                console.log('response: ', response)
                return setLogin()
            })
        )
    );

    constructor(
        private actions$: Actions,
        private loginService: LoginService
    ) {}
}