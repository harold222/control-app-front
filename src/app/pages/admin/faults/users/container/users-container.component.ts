import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FaultsStoreService } from '../../service/faults.store.service';
import { InterfaceUser } from '../../../store/interfaces/InterfaceUser';
import { InterfaceRegistration } from '../../../../../shared/services/record/model/getFaultsByRecord/InterfaceRegistration';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
})
export class UsersContainer implements OnInit {

  public idStation: string;
  public loading$: Observable<boolean>;
  public usersByStation$: Observable<InterfaceUser[]>;
  public recordsByUser$: Observable<InterfaceRegistration[]>;
  public userWithoutRecord$: Observable<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private faultsStoreService: FaultsStoreService
  ) {
    this.loading$ = this.faultsStoreService.selectLoading();
    this.usersByStation$ = this.faultsStoreService.selectUsersByStation();
    this.recordsByUser$ = this.faultsStoreService.selectRecordsByUser();
    this.userWithoutRecord$ = this.faultsStoreService.selectUserWithoutRecords();
  }

  ngOnInit(): void {
    this.idStation = this.activatedRoute.snapshot.params['id'];
    this.faultsStoreService.getUsersByStation(this.idStation);
  }

}
