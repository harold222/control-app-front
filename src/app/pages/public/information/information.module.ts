import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationRoutingModule } from './information.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationComponent } from './component/information.component';


@NgModule({
  declarations: [
    InformationComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InformationModule { }
