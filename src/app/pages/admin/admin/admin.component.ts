import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminStoreService } from '../service/admin.store.service';
import { takeUntil, Subject } from 'rxjs';
import {
  faComputerMouse,
  faUser,
  faFileArchive,
  faMessage,
  faArrowRightFromBracket,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  public icons = {
    main: faComputerMouse,
    profile: faUser,
    report: faFileArchive,
    message: faMessage,
    logout: faArrowRightFromBracket,
    search: faMagnifyingGlass
  };

  public infoUser: { image: string, name: string, lastname: string };
  private unsubscribe = new Subject<void>();

  constructor(private adminStoreService: AdminStoreService) { }

  public ngOnInit(): void {
    this.adminStoreService.selectUserInfo()
    .pipe(
      takeUntil(this.unsubscribe)
    )
    .subscribe(data => {
      this.infoUser = {
        image: data.image,
        name: data.name,
        lastname: data.lastname
      }
    })
  }

  public ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
