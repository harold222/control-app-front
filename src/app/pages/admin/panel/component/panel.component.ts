import { Component, OnInit } from '@angular/core';
import {
  faComputerMouse,
  faUser,
  faFileArchive,
  faMessage,
  faArrowRightFromBracket,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public expand: boolean = false;
  public icons = {
    main: faComputerMouse,
    profile: faUser,
    report: faFileArchive,
    message: faMessage,
    logout: faArrowRightFromBracket,
    search: faMagnifyingGlass
  };

  constructor() { }

  ngOnInit(): void {
  }


  sidebar() {
    this.expand = !this.expand;      
  }

}
