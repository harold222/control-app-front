import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './component/admin.component';
import { LayoutModule } from '../../shared/components/layout/layout.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ErrorModalsModule } from '../../shared/components/error-modal/error-modal.module';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AdminRoutingModule,
    ErrorModalsModule,
  ]
})
export class AdminModule { }
