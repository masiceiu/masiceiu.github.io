import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, NoComponent } from './app.component';
//import { UserComponent } from './users/user.component';
//import { ServersComponent } from './servers/servers.component';
//import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
//import { NoPageComponent } from './noPage/nopage.component';
//import { ServerComponent } from './servers/server/server.component';
//import { EditServerComponent } from './servers/edit-server/edit-server.component';


@NgModule({
  imports:      [BrowserModule, CommonModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent,NoComponent/*, UserComponent, ServersComponent, HomeComponent, ServerComponent, EditServerComponent*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
