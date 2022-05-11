import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminStoreService } from '../../service/admin.store.service';
import { InterfaceStations } from '../../store/interfaces/InterfaceStations';
import { InterfaceUser } from '../../store/interfaces/InterfaceUser';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
})
export class RegisterContainer implements OnInit {

  public schedule$: Observable<string>;
  public stations$: Observable<InterfaceStations[]>;
  public loading$: Observable<boolean>;
  public usersByStation$: Observable<InterfaceUser[]>;
  public typeSchedule: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private adminStoreService: AdminStoreService
  ) {
    this.schedule$ = this.adminStoreService.selectTypeOfSchedule();
    this.stations$ = this.adminStoreService.selectStations();
    this.loading$ = this.adminStoreService.selectLoading();
    this.usersByStation$ = this.adminStoreService.selectUsersByStations();
    this.adminStoreService.setLoading(true);
  }

  public ngOnInit(): void {
    const schedule = this.activatedRoute.snapshot.queryParams['schedule']
    const allowedSchedules = ['ingress', 'exit']
    let goToMain = true;

    if (schedule) {
      this.typeSchedule = schedule;
      if (allowedSchedules.includes(schedule)) goToMain = false 
    }

    if (goToMain) {
      this.adminStoreService.setLoading(false);
      this.router.navigateByUrl('/main')
    } else this.getStations(schedule);
  }

  public getStations(schedule: string): void {
    this.adminStoreService.setTypeOfSchedule(schedule);
    this.adminStoreService.getStations();
  }
}
