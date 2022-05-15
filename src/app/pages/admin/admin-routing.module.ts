import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { PanelContainer } from './panel/container/panel-container.component';
import { ExistsessionGuard } from '../../guards/existsession.guard';
import { RegisterContainer } from './register/container/register-container.component';
import { UserregisterContainer } from './userregister/container/userregister-container.component';
import { FaultsModule } from './faults/faults.module';

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
            },
            {
                path: 'faults',
                loadChildren: () => import('./faults/faults.module')
                    .then((p: { FaultsModule: FaultsModule }) => p.FaultsModule).catch(),
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