import { NgModule, APP_INITIALIZER, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import { ProfileComponent } from './pages/profile/profile.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';

import { AppService } from './app.service';
import { HttpLoading } from './http.loading';
import { SiteInterceptor } from './site.interceptor';
import { CacheInterceptor } from './cache.interceptor';
import { GlobalData } from './shared/models/global-data';

//const url = `/assets/json/config.json`
export function loadSettings(settings: AppService) {
   return () => settings.load();
}
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      //environment.production 
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    AppService, HttpLoading,
    { provide: GlobalData, useValue: new GlobalData() },
    { provide: HTTP_INTERCEPTORS, useClass: SiteInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    { provide: APP_INITIALIZER, useFactory: loadSettings, deps: [AppService], multi: true }
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }