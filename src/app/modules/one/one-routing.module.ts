import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './noPage/nopage.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { OneComponent } from './one.component';

const routes: Routes = [{
  path: "",
  component: OneComponent,
  children:[
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path: 'server', 
    component: ServersComponent, 
    children: [
      {path: ':id/edit', component: EditServerComponent},
      {path: ':id', component: ServerComponent}
    ]},
    {path: 'user', component: UserComponent},
  ]},
{path: '**', component: NoPageComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneRoutingModule {}

