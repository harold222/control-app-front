import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userregister-container',
  templateUrl: './userregister-container.component.html',
})
export class UserregisterContainer implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let a = this.activatedRoute.snapshot.queryParams
    console.log('son: ', a)
  }

}
