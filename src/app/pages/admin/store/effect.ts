import { Injectable } from '@angular/core';
import * as actions from './action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, mergeMap, map } from 'rxjs';
import { AdminStoreService } from '../service/admin.store.service';
import { StationService } from '../../../shared/services/station/station.service';
import { IgetStationsBySupervisorResponse } from '../../../shared/services/station/model/IgetStationsBySupervisorResponse';
import { RegistrationService } from '../../../shared/services/registration/registration.service';

@Injectable()
export class AdminEffects {

    public getStations$ =
        createEffect(() => this.actions$.pipe(
            ofType(actions.getStations),
            mergeMap((action: { type: string }) => this.stationService.getStationsBySupervisor()),
            map((response: IgetStationsBySupervisorResponse) => {
                this.adminStoreService.setLoading(false);
                return actions.setStations({ stations: response.stations })
            })
        )
    );

    public getUsersByStation$ =
        createEffect(() => this.actions$.pipe(
            ofType(actions.getUsersByStations),
            mergeMap((action: { idStation: string, type: string }) =>
                this.registrationService.getStationsBySupervisor(action.idStation)),
            map((response: any) => {
                console.log('es: ', response)
            })
        ), { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private adminStoreService: AdminStoreService,
        private stationService: StationService,
        private registrationService: RegistrationService
    ) {}
}