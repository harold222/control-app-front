import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublicComponent } from './component/public.component';
import { LoginModule } from './login/login.module';
import { InformationModule } from './information/information.module';

const routes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./login/login.module')
                    .then((p: { LoginModule: LoginModule }) => p.LoginModule).catch(),
            },
            {
                path: 'information',
                loadChildren: () => import('./information/information.module')
                    .then((p: { InformationModule: InformationModule }) => p.InformationModule).catch()
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PublicRoutingModule {
}