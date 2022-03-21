/*!
 * Copyright 2020 - UR TRAVEL AND SOFTWARE SAS
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
    ],
    imports:      [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
        ModalModule.forRoot()
    ],
    exports: [
    ]
})
export class ErrorModalsModule {
}
