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

  constructor(private adminStoreService: AdminStoreService) {}

  public ngOnInit(): void {
    this.loading$ = this.adminStoreService.selectLoading();
    this.user$ = this.adminStoreService.selectUserInfo();
  }

}
