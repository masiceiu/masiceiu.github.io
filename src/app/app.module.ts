import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, NoPageComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { UserComponent } from './users/user.component';
//import { ServersComponent } from './servers/servers.component';
//import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth.interceptor';
//import { NoPageComponent } from './noPage/nopage.component';
//import { ServerComponent } from './servers/server/server.component';
//import { EditServerComponent } from './servers/edit-server/edit-server.component';


@NgModule({
  declarations: [
    AppComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Enable DI-based interceptors
    { provide: 'apiBaseUrl', useValue: 'https://ictcarehome.com/' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
