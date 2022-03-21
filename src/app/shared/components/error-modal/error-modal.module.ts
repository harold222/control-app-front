/*!
 * Copyright 2020 - UR TRAVEL AND SOFTWARE SAS
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorModalContainer } from './error/container/error-modal-container.component';
import { ErrorModalComponent } from './error/component/error-modal-component';

@NgModule({
  declarations: [
    ErrorModalContainer,
    ErrorModalComponent
  ],
  imports:      [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ModalModule.forRoot()
  ],
  exports: [
    ErrorModalContainer
  ]
})
export class ErrorModalsModule {
}
