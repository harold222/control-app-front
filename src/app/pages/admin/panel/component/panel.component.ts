import { Component, Input, OnInit } from '@angular/core';
import { InterfaceUserInfo } from '../../store/interfaces/InterfaceUserInfo';
import { AdminStoreService } from '../../service/admin.store.service';
import {
  faCalendar,
  faBusAlt,
  faCalendarCheck,
  faFileArrowDown,
  faPeopleCarryBox,
  faPlus,
  faCheck,
  faListCheck,
  faCheckSquare,
  faPersonDotsFromLine,
  faPenToSquare,
  faTrash
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public icons = {
    calendar: faCalendar,
    bus: faBusAlt,
    failure: faCalendarCheck,
    filedownload: faFileArrowDown,
    group: faPeopleCarryBox,
    addPerson: faPlus,
    addStation: faCheck,
    list: faListCheck,
    workstation: faCheckSquare,
    boss: faPersonDotsFromLine,
    edit: faPenToSquare,
    delete: faTrash
  };

  public userInfo: InterfaceUserInfo;

  @Input() loading: boolean | null;

  @Input() set user(info: InterfaceUserInfo | null) {
    if (info?.id) {
      this.userInfo = info;
      this.adminStoreService.setLoading(false);
    }
  }

  constructor(private adminStoreService: AdminStoreService) { }

  ngOnInit(): void {
  }

}
