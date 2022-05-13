import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userregister-container',
  templateUrl: './userregister-container.component.html',
})
export class UserregisterContainer implements OnInit {

  public typeOfSchedule: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const idStation = this.activatedRoute.snapshot.params['idStation']
    const idOperator = this.activatedRoute.snapshot.params['idOperator']

    this.typeOfSchedule = this.activatedRoute.snapshot.queryParams['schedule']
  }

}
