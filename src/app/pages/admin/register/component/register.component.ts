import { Component, Input, OnInit } from '@angular/core';
import { InterfaceStations } from '../../store/interfaces/InterfaceStations';
import { AdminStoreService } from '../../service/admin.store.service';
import { InterfaceUser } from '../../store/interfaces/InterfaceUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() public schedule: string | null;

  @Input() public stations: InterfaceStations[] | null;

  @Input() public loading: boolean | null;

  @Input() public usersByStation: InterfaceUser[] | null;

  public selectedStation: string;

  constructor(
    private adminStoreService: AdminStoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public selectStation(id: string): void {
    this.adminStoreService.getUsersByStation(id);
    this.selectedStation = id;
  }

  public selectUser(id: string): void {
    this.router.navigate([`/main/register/${this.selectedStation}/${id}`]);
  }

}
