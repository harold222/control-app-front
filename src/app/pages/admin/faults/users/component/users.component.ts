import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() public idStation: string | null;

  @Input() public loading: boolean | null;

  constructor() { }

  ngOnInit(): void {
  }

}
