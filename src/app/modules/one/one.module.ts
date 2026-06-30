import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { OneComponent } from './one.component';
import { UserComponent } from './users/user.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { OneRoutingModule } from './one-routing.module';
import { NoPageComponent } from './noPage/nopage.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ApiDemoComponent } from './api/api-demo.component';


@NgModule({
  imports:      [CommonModule, FormsModule, OneRoutingModule ],
  declarations: [ OneComponent, UserComponent, ServersComponent, HomeComponent, NoPageComponent, ServerComponent, EditServerComponent, ApiDemoComponent]
})
export class OneModule { }
