import { Component, Input, OnInit } from '@angular/core';
import { InterfaceStations } from '../../store/interfaces/InterfaceStations';
import { AdminStoreService } from '../../service/admin.store.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() public schedule: string | null;

  @Input() public stations: InterfaceStations[] | null;

  @Input() public loading: boolean | null;

  constructor(private adminStoreService: AdminStoreService) { }

  ngOnInit(): void {
  }

  public selectStation(id: any): void {
    this.adminStoreService.getUsersByStation(id);
  }

}
