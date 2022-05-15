import { Component, Input, OnInit } from '@angular/core';
import { InterfaceUser } from '../../store/interfaces/InterfaceUser';
import { Router } from '@angular/router';
import { AdminStoreService } from '../../service/admin.store.service';
import { InterfaceUserInfo } from '../../store/interfaces/InterfaceUserInfo';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.scss']
})
export class UserregisterComponent implements OnInit {

  @Input() public idStation: string | null;
  @Input() public idOperator: string | null;
  @Input() public schedule: string | null;
  @Input() public operator: InterfaceUser | null;
  @Input() public loading: boolean | null;
  @Input() public userInfo: InterfaceUserInfo | null;

  constructor(
    private router: Router,
    private adminStoreService: AdminStoreService
  ) { }

  ngOnInit(): void {
  }

  public validateOperator(): void {
    if (this.schedule === 'ingress') {
      this.adminStoreService.updateOpeningTime({
        idOperator: this.idOperator!!,
        idStation: this.idStation!!,
        idSupervisor: this.userInfo?.id!!
      })
    } else {
      this.adminStoreService.updateClosingTime({
        idOperator: this.idOperator!!,
        idStation: this.idStation!!,
        idSupervisor: this.userInfo?.id!!
      })
    }
  }

}
