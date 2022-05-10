import { Component } from '@angular/core';
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
export class AdminComponent {

  public icons = {
    main: faComputerMouse,
    profile: faUser,
    report: faFileArchive,
    message: faMessage,
    logout: faArrowRightFromBracket,
    search: faMagnifyingGlass
  };

  constructor() { }
}
