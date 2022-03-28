import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './component/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginContainerComponent } from './container/login-container.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginContainerComponent
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
