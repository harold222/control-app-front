import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { PanelContainer } from './panel/container/panel-container.component';
import { ExistsessionGuard } from '../../guards/existsession.guard';
import { RegisterContainer } from './register/container/register-container.component';
import { UserregisterContainer } from './userregister/container/userregister-container.component';
import { FaultsContainer } from './faults/container/faults-container.component';

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
            },
            {
                path: 'register/:idStation/:idOperator',
                component: UserregisterContainer
            },{
                path: 'faults',
                component: FaultsContainer
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