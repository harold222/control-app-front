import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PublicModule } from './pages/public/public.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/public/public.module')
      .then((m: { PublicModule: PublicModule }) => m.PublicModule)
  },
  // {
  //   path: '',
  //   // loadChildren: () => import().then((p: { AdminModule }) => p.AdminModule).catch()
  // },
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
