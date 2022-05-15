import { Component, Input, OnInit } from '@angular/core';
import { InterfaceStations } from '../../store/interfaces/InterfaceStations';
import { AdminStoreService } from '../../service/admin.store.service';
import { InterfaceUser } from '../../store/interfaces/InterfaceUser';
import { Router } from '@angular/router';
import { InterfaceUserInfo } from '../../store/interfaces/InterfaceUserInfo';
import { IRecord } from '../../../../shared/services/record/model/IRecord';
import { InformationModalService } from '../../../../shared/components/information-modal/service/information-modal.service';
import { IStationsAndSchedule } from '../../../../shared/services/station/model/IStationsAndSchedule';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() public schedule: string | null;

  @Input() public stations: IStationsAndSchedule[] | null;

  @Input() public loading: boolean | null;

  @Input() public usersByStation: InterfaceUser[] | null;

  @Input() public userInfo: InterfaceUserInfo | null;

  public idStation: string;

  public currentRecord: IRecord;

  @Input() set idSelectedStation(id: string | null) {
    if (id) {
      this.idStation = id;
      this.adminStoreService.getRecordBySupervisor(this.userInfo?.id!!, this.idStation);
    }
  }

  @Input() set record(currentRecord: IRecord | null) {
    if (currentRecord) {
      if (currentRecord._id) {
        this.currentRecord = currentRecord;
        this.adminStoreService.getOperatorsByRecord({
          createdTime: currentRecord.createdTime,
          idStation: this.idStation,
          idSupervisor: this.userInfo?.id!!,
          schedule: this.schedule!!
        })
      }
    } else {
      this.adminStoreService.getUsersByStation(this.idStation);
    }
  }

  constructor(
    private adminStoreService: AdminStoreService,
    private router: Router,
    private informationModalService: InformationModalService
  ) { }

  ngOnInit(): void {}
 
  public selectStation(id: string, schedule: string): void {
    this.adminStoreService.setIdSelectedStation(id);
    this.adminStoreService.setTypeOfSchedule(schedule);
  }

  public selectUser(id: string): void {
    this.router.navigate(
      [`/main/register/${this.idStation}/${id}`],
      {
        queryParams: { schedule: this.schedule }
      }
    );
  }

  public finishRegister():void {
    this.adminStoreService.updateStateRecordAndHistory({
      idRecord: this.currentRecord._id,
      type: this.schedule!!
    })
  }
}
