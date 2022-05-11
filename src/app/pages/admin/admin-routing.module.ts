import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { PanelContainer } from './panel/container/panel-container.component';
import { ExistsessionGuard } from '../../guards/existsession.guard';
import { RegisterContainer } from './register/container/register-container.component';

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
                component: RegisterContainer
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