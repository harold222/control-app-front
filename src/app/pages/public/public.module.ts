import { NgModule } from '@angular/core';
import { LayoutModule } from '../../shared/components/layout/layout.module';
import { PublicRoutingModule } from './public-routing.module';
import { CommonModule } from '@angular/common';
import { ErrorModalsModule } from '../../shared/components/error-modal/error-modal.module';
import { PublicComponent } from './component/public.component';

@NgModule({
    declarations: [
        PublicComponent
    ],
    imports: [
        LayoutModule,
        PublicRoutingModule,
        CommonModule,
        ErrorModalsModule
    ],
    providers: [
    ],
})
export class PublicModule {
}
