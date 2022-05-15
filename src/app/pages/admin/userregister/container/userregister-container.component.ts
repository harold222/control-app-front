import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminStoreService } from '../../service/admin.store.service';
import { Observable } from 'rxjs';
import { InterfaceUser } from '../../store/interfaces/InterfaceUser';
import { InterfaceUserInfo } from '../../store/interfaces/InterfaceUserInfo';

@Component({
  selector: 'app-userregister-container',
  templateUrl: './userregister-container.component.html',
})
export class UserregisterContainer implements OnInit {

  public typeOfSchedule: string;
  public idStation: string;
  public idOperator: string;
  public operator$: Observable<InterfaceUser>;
  public loading$: Observable<boolean>;
  public userInfo$: Observable<InterfaceUserInfo>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminStoreService: AdminStoreService
  ) {
    this.idStation = this.activatedRoute.snapshot.params['idStation']
    this.idOperator = this.activatedRoute.snapshot.params['idOperator']
    this.typeOfSchedule = this.activatedRoute.snapshot.queryParams['schedule']

    this.operator$ = this.adminStoreService.selectSelectedOperator();
    this.loading$ = this.adminStoreService.selectLoading();
    this.userInfo$ = this.adminStoreService.selectUserInfo();
  }

  ngOnInit(): void {
    this.adminStoreService.getSelectedOperator(this.idOperator);
  }

}
