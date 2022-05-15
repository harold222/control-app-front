import { Injectable } from '@angular/core';
import * as actions from './action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, mergeMap, map } from 'rxjs';
import { AdminStoreService } from '../service/admin.store.service';
import { StationService } from '../../../shared/services/station/station.service';
import { IgetStationsBySupervisorResponse } from '../../../shared/services/station/model/IgetStationsBySupervisorResponse';
import { RegistrationService } from '../../../shared/services/registration/registration.service';
import { ICreateNewRegistration } from '../../../shared/services/registration/model/CreateNewRegistration/ICreateNewRegistration';
import { RecordService } from '../../../shared/services/record/record.service';
import { IGetRecordBySupervisorResponse } from '../../../shared/services/record/model/IGetRecordBySupervisorResponse';
import { IGetOperatorsByRecordRequest } from '../../../shared/services/registration/model/GetOperatorsByRecord/IGetOperatorsByRecordRequest';
import { IGetOperatorsByRecordResponse } from '../../../shared/services/registration/model/GetOperatorsByRecord/IGetOperatorsByRecordResponse';

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
            map((response: ICreateNewRegistration) => actions.setUsersByStations({ usersByStations: response.users }))
        )
    );

    public getRecordBySupervisor$ =
        createEffect(() => this.actions$.pipe(
            ofType(actions.getRecordBySupervisor),
            mergeMap((action: { idSupervisor: string, idStation: string, type: string }) =>
                this.recordService.getRecordBySupervisor(action.idSupervisor, action.idStation)),
            map((response: IGetRecordBySupervisorResponse) => actions.setCurrentRecord({ record: response.record }))
        )
    );  

    public getOperatorsByRecord$ =
        createEffect(() => this.actions$.pipe(
            ofType(actions.getOperatorsByRecord),
            mergeMap((action: { request: IGetOperatorsByRecordRequest, type: string }) =>
                this.registrationService.getOperatorsByRecord(action.request)),
            map((response: IGetOperatorsByRecordResponse) =>
                actions.setUsersByStations({ usersByStations: response.allUsers }))
        )
    );  

    constructor(
        private actions$: Actions,
        private adminStoreService: AdminStoreService,
        private stationService: StationService,
        private registrationService: RegistrationService,
        private recordService: RecordService   
    ) {}
}