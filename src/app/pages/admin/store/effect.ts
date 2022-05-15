import { Injectable } from '@angular/core';
import * as actions from './action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, mergeMap, map, switchMap } from 'rxjs';
import { AdminStoreService } from '../service/admin.store.service';
import { StationService } from '../../../shared/services/station/station.service';
import { IgetStationsBySupervisorResponse } from '../../../shared/services/station/model/IgetStationsBySupervisorResponse';
import { RegistrationService } from '../../../shared/services/registration/registration.service';
import { ICreateNewRegistration } from '../../../shared/services/registration/model/CreateNewRegistration/ICreateNewRegistration';
import { RecordService } from '../../../shared/services/record/record.service';
import { IGetRecordBySupervisorResponse } from '../../../shared/services/record/model/IGetRecordBySupervisorResponse';
import { IGetOperatorsByRecordRequest } from '../../../shared/services/registration/model/GetOperatorsByRecord/IGetOperatorsByRecordRequest';
import { IGetOperatorsByRecordResponse } from '../../../shared/services/registration/model/GetOperatorsByRecord/IGetOperatorsByRecordResponse';
import { IUpdateStateRecordAndHistoryRequest } from 'src/app/shared/services/record/model/updateStateRecordAndHistory/IUpdateStateRecordAndHistoryRequest';
import { IUpdateStateRecordAndHistoryResponse } from '../../../shared/services/record/model/updateStateRecordAndHistory/IUpdateStateRecordAndHistoryResponse';
import { Router } from '@angular/router';
import { InformationModalService } from '../../../shared/components/information-modal/service/information-modal.service';
import { IGetSpecificRecordResponse } from '../../../shared/services/record/model/getSpecificRecord/IGetSpecificRecordResponse';

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
            tap(() => this.adminStoreService.setLoading(true)),
            mergeMap((action: { idStation: string, type: string }) =>
                this.registrationService.getStationsBySupervisor(action.idStation)
                .pipe(
                    switchMap((response: ICreateNewRegistration) =>
                        this.recordService.getSpecificRecord(response.history)
                        .pipe(
                            map((responseTwo: IGetSpecificRecordResponse) => {
                                this.adminStoreService.setLoading(false);
                                return actions.setCurrentRecord({ record: responseTwo.record })
                            })
                        )
                    )
                )
            ),
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

    public updateStateRecordAndHistory$ =
        createEffect(() => this.actions$.pipe(
            ofType(actions.updateStateRecordAndHistory),
            mergeMap((action: { request: IUpdateStateRecordAndHistoryRequest, type: string }) =>
                this.recordService.updateStateRecordAndHistory(action.request)),
            map((response: IUpdateStateRecordAndHistoryResponse) => {
                let message = { title: '', message: '' }
                
                if (response.status) {
                    this.router.navigate(['main']);
                    message.title = 'Registro';
                    message.message = 'Se ha actualizado el registro correctamente';
                } else {
                    message.title = 'Error';
                    message.message = 'Se ha generado un error al actualizar el registro, vuelva a intentarlo.';
                }

                this.informationModalService.setInformation(message.title, message.message)
                this.informationModalService.setModal(true)
            })
        ), { dispatch: false }
    );  

    constructor(
        private actions$: Actions,
        private adminStoreService: AdminStoreService,
        private stationService: StationService,
        private registrationService: RegistrationService,
        private recordService: RecordService,
        private router: Router,
        private informationModalService: InformationModalService,
    ) {}
}