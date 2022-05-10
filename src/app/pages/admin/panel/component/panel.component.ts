import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
