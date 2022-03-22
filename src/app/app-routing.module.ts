import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PublicModule } from './pages/public/public.module';
import { AdminModule } from './pages/admin/admin.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/public/public.module')
      .then((m: { PublicModule: PublicModule }) => m.PublicModule)
      .catch()
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/admin/admin.module')
      .then((p: { AdminModule: AdminModule }) => p.AdminModule)
      .catch()
  },
  {
    path: '**',
    redirectTo: '',
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      paramsInheritanceStrategy: 'always',
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
