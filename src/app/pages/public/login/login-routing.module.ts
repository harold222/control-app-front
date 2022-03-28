import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginContainerComponent } from './container/login-container.component';

const routes: Routes = [
    {
        path: '',
        component: LoginContainerComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginRoutingModule {}