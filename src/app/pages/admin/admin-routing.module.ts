import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { PanelContainer } from './panel/container/panel-container.component';
import { ExistsessionGuard } from '../../guards/existsession.guard';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [ExistsessionGuard],
        children: [
            {
                path: '',
                component: PanelContainer
            },
            {
                path: 'register',
            }
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {
}