import { Component, Input } from '@angular/core';
import { IStationsAndSchedule } from '../../../../../shared/services/station/model/IStationsAndSchedule';
import { Router } from '@angular/router';
import { InterfaceUserInfo } from '../../../store/interfaces/InterfaceUserInfo';

@Component({
  selector: 'app-faults',
  templateUrl: './faults.component.html',
  styleUrls: ['./faults.component.scss']
})
export class FaultsComponent {

  @Input() public stations: IStationsAndSchedule[] | null;

  @Input() public loading: boolean | null;

  @Input() public userInfo: InterfaceUserInfo | null;

  constructor(private router: Router) { }

  public selectStation(id: string) {
    this.router.navigate([`/main/faults/station/${id}`])
  }

}
