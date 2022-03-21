import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InformationComponent } from './component/information.component';

const routes: Routes = [
    {
        path: '',
        component: InformationComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InformationRoutingModule {}