import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStationsAndSchedule } from '../../../../../shared/services/station/model/IStationsAndSchedule';
import { AdminStoreService } from '../../../service/admin.store.service';
import { FaultsStoreService } from '../../service/faults.store.service';
import { InterfaceUserInfo } from '../../../store/interfaces/InterfaceUserInfo';

@Component({
  selector: 'app-faults-contaienr',
  templateUrl: './faults-contaienr.component.html',
})
export class FaultsContaienrComponent implements OnInit {

  public stations$: Observable<IStationsAndSchedule[]>;
  public loading$: Observable<boolean>;
  public userInfo$: Observable<InterfaceUserInfo>;

  constructor(
    private faultsStoreService: FaultsStoreService,
    private adminStoreService: AdminStoreService
  ) {
    this.stations$ = this.faultsStoreService.selectStations();
    this.loading$ = this.faultsStoreService.selectLoading();
    this.userInfo$ = this.adminStoreService.selectUserInfo();
  }

  public ngOnInit(): void {
    this.faultsStoreService.getStations();
  }
}
