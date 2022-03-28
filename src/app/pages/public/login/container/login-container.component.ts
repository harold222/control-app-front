import { Component, OnInit } from '@angular/core';
import { LoginStoreService } from '../service/login.store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html'
})
export class LoginContainerComponent implements OnInit {

  public loading$: Observable<boolean>;

  constructor(private loginStoreService: LoginStoreService) { }

  public ngOnInit(): void {
    this.loading$ = this.loginStoreService.selectLoading();
  }

}
