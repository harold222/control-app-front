import { Component, Input, OnInit } from '@angular/core';
import { InterfaceUser } from '../../store/interfaces/InterfaceUser';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.scss']
})
export class UserregisterComponent implements OnInit {

  @Input() public idStation: string | null;
  @Input() public idOperator: string | null;
  @Input() public schedule: string | null;
  @Input() public operator: InterfaceUser | null;
  @Input() public loading: boolean | null;

  constructor() { }

  ngOnInit(): void {
  }

}
