import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExistsessionGuard } from '../../../guards/existsession.guard';
import { FaultsContainer } from './container/faults-container.component';
import { FaultsContaienrComponent } from './faults/container/faults-contaienr.component';

const routes: Routes = [
    {
        path: '',
        component: FaultsContainer,
        canActivate: [ExistsessionGuard],
        children: [
            {
                path: '',
                component: FaultsContaienrComponent
            },
            {
                path: '/:id',
                
            }
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FaultsRoutingModule {
}