import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// loading component by router and http
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { NgxLoadingModule } from 'ngx-loading';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { Routes, RouterModule } from '@angular/router';

// Modules of ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Modules of pwa
import { StorageModule } from '@ngx-pwa/local-storage';
import { ServiceWorkerModule } from '@angular/service-worker';

// all reducers of app
import { reducers } from './store/app.reducer';

//  interceptors
import { InterceptorToken } from './interceptors/interceptor-token';
import { LoginEffects } from './pages/public/login/store/effect';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgxLoadingModule.forRoot({}),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      LoginEffects
    ]),
    StorageModule.forRoot({ 
      IDBDBName: 'ControlDataBase', 
      IDBStoreName: 'Storage', 
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorToken,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
