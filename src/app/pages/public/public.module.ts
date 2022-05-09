import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './component/public.component';
import { InformationModalsModule } from '../../shared/components/information-modal/information-modal.module';

@NgModule({
    declarations: [
        PublicComponent
    ],
    imports: [
        PublicRoutingModule,
        CommonModule,
        InformationModalsModule
    ],
    providers: [
    ],
})
export class PublicModule { }