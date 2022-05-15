import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../../shared/components/layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InformationModalsModule } from '../../../shared/components/information-modal/information-modal.module';
import { ErrorModalsModule } from '../../../shared/components/error-modal/error-modal.module';
import { FaultsRoutingModule } from './faults-routing.module';
import { FaultsContainer } from './container/faults-container.component';
import { FaultsComponent } from './faults/component/faults.component';
import { FaultsContaienrComponent } from './faults/container/faults-contaienr.component';
import { UsersContainer } from './users/container/users-container.component';
import { UsersComponent } from './users/component/users.component';


@NgModule({
  declarations: [
    FaultsContainer,
    FaultsComponent,
    FaultsContaienrComponent,
    UsersContainer,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    InformationModalsModule,
    ErrorModalsModule,
    FaultsRoutingModule
  ]
})
export class FaultsModule { }
