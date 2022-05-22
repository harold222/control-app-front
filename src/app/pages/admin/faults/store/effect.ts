import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './action';
import { mergeMap, map } from 'rxjs';
import { IgetStationsBySupervisorResponse } from '../../../../shared/services/station/model/IgetStationsBySupervisorResponse';
import { StationService } from '../../../../shared/services/station/station.service';
import { InterfaceUser } from '../../store/interfaces/InterfaceUser';
import { IGetOperatorsByStationResponse } from '../../../../shared/services/station/model/getOperatorsByStation/IGetOperatorsByStationResponse';
import { IGetFaultsByRecordRequest } from '../../../../shared/services/record/model/getFaultsByRecord/IGetFaultsByRecordRequest';
import { RecordService } from '../../../../shared/services/record/record.service';
import { IGetFaultsByRecordResponse } from '../../../../shared/services/record/model/getFaultsByRecord/IGetFaultsByRecordResponse';
import { FaultsStoreService } from '../service/faults.store.service';

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

    public getUsersByStation$ =
        createEffect(() => this.actions$.pipe(
            ofType(actions.getUsersByStation),
            mergeMap((action: { idStation: string, type: string }) =>
                this.stationService.getOperatorsByStation(action.idStation)),
            map((response: IGetOperatorsByStationResponse) => {
                return actions.setUsersByStation({ users: response.operators })
            })
        )
    );

    public getRecordsByUser$ =
        createEffect(() => this.actions$.pipe(
            ofType(actions.getRecordsByUser),
            mergeMap((action: { request: IGetFaultsByRecordRequest, type: string }) =>
                this.recordService.getFaultsByRecord(action.request)),
            map((response: IGetFaultsByRecordResponse) => {
                if (!response.registrations?.length && response.status)
                    this.faultsStoreService.setUserWithoutRecords(true);
                return actions.setRecordsByUser({ registrations: response.registrations })
            })
        )
    );

    constructor(
        private actions$: Actions,
        private stationService: StationService,
        private recordService: RecordService,
        private faultsStoreService: FaultsStoreService
    ) {}
}