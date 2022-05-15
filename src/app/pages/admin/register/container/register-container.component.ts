import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminStoreService } from '../../service/admin.store.service';
import { InterfaceUser } from '../../store/interfaces/InterfaceUser';
import { InterfaceUserInfo } from '../../store/interfaces/InterfaceUserInfo';
import { IRecord } from '../../../../shared/services/record/model/IRecord';
import { IStationsAndSchedule } from '../../../../shared/services/station/model/IStationsAndSchedule';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
})
export class RegisterContainer implements OnInit {

  public schedule$: Observable<string>;
  public stations$: Observable<IStationsAndSchedule[]>;
  public loading$: Observable<boolean>;
  public usersByStation$: Observable<InterfaceUser[]>;
  public idSelectedStation$: Observable<string>;
  public userInfo$: Observable<InterfaceUserInfo>;
  public record$: Observable<IRecord>;

  constructor(
    private adminStoreService: AdminStoreService
  ) {
    this.schedule$ = this.adminStoreService.selectTypeOfSchedule();
    this.stations$ = this.adminStoreService.selectStations();
    this.loading$ = this.adminStoreService.selectLoading();
    this.usersByStation$ = this.adminStoreService.selectUsersByStations();
    this.idSelectedStation$ = this.adminStoreService.selectIdSelectedStation();
    this.userInfo$ = this.adminStoreService.selectUserInfo();
    this.record$ = this.adminStoreService.selectCurrentRecord();
  }

  public ngOnInit(): void {
    this.adminStoreService.getStations();
  }
}
