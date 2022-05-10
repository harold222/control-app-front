import { Component, OnInit } from '@angular/core';
import { AdminStoreService } from '../../service/admin.store.service';
import { Observable } from 'rxjs';
import { InterfaceUserInfo } from '../../store/interfaces/InterfaceUserInfo';

@Component({
  selector: 'app-panel-container',
  templateUrl: './panel-container.html',
})
export class PanelContainer implements OnInit {

  public loading$: Observable<boolean>;
  public user$: Observable<InterfaceUserInfo>;

  constructor(private adminStoreService: AdminStoreService) {
    const userInfo = JSON.parse(localStorage.getItem('userInformation')!!);
    userInfo && this.adminStoreService.setUserInfo(userInfo)
  }

  ngOnInit(): void {
    this.loading$ = this.adminStoreService.selectLoading();
    this.user$ = this.adminStoreService.selectUserInfo();
  }

}
