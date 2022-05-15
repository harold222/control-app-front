import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../shared/components/layout/layout.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ErrorModalsModule } from '../../shared/components/error-modal/error-modal.module';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PanelContainer } from './panel/container/panel-container.component';
import { PanelComponent } from './panel/component/panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterContainer } from './register/container/register-container.component';
import { RegisterComponent } from './register/component/register.component';
import { ExitComponent } from './register/exit/exit.component';
import { UserregisterContainer } from './userregister/container/userregister-container.component';
import { UserregisterComponent } from './userregister/component/userregister.component';
import { InformationModalsModule } from '../../shared/components/information-modal/information-modal.module';


@NgModule({
  declarations: [
    AdminComponent,
    PanelContainer,
    PanelComponent,
    RegisterContainer,
    RegisterComponent,
    ExitComponent,
    UserregisterContainer,
    UserregisterComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
    InformationModalsModule,
    ErrorModalsModule,
  ]
})
export class AdminModule { }
