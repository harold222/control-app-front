/*!
* Copyright 2021 - Soluciones Informaticas
*/

import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderContainerComponent } from './header/container/header-container.component';
import { HeaderComponent } from './header/component/header-component.component';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderContainerComponent,
        HeaderComponent
    ],
    exports: [
        HeaderContainerComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        RouterModule
    ]
})
export class LayoutModule {
}
