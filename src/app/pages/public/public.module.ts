import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './component/public.component';

@NgModule({
    declarations: [
        PublicComponent
    ],
    imports: [
        PublicRoutingModule,
        CommonModule
    ],
    providers: [
    ],
})
export class PublicModule { }