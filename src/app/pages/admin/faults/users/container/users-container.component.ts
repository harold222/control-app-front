import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FaultsStoreService } from '../../service/faults.store.service';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
})
export class UsersContainer implements OnInit {

  public idStation: string;
  public loading$: Observable<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private faultsStoreService: FaultsStoreService
  ) {
    this.loading$ = this.faultsStoreService.selectLoading();
  }

  ngOnInit(): void {
    this.idStation = this.activatedRoute.snapshot.params['id']
  }

}
