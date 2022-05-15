import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './action';
import { mergeMap, map } from 'rxjs';
import { IgetStationsBySupervisorResponse } from '../../../../shared/services/station/model/IgetStationsBySupervisorResponse';
import { StationService } from '../../../../shared/services/station/station.service';

@Injectable()
export class FaultsEffects {

    public getStations$ =
        createEffect(() => this.actions$.pipe(
            ofType(actions.getStations),
            mergeMap((action: { type: string }) => this.stationService.getStationsBySupervisor()),
            map((response: IgetStationsBySupervisorResponse) => {
                return actions.setStations({ stations: response.stations })
            })
        )
    );

    constructor(
        private actions$: Actions,
        private stationService: StationService,
    ) {}
}