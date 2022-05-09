import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InformationContainerComponent } from './information/container/information-container.component';
import { InformationModalComponent } from './information/component/information-modal.component';

@NgModule({
    declarations: [
        InformationContainerComponent,
        InformationModalComponent
    ],
    imports:      [
      CommonModule,
      RouterModule,
      FontAwesomeModule,
      ModalModule.forRoot()
    ],
    exports: [
        InformationContainerComponent
    ]
})

export class InformationModalsModule {  }