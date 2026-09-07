import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './noPage/nopage.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { OneComponent } from './one.component';
import { ApiDemoComponent } from './api/api-demo.component';
import { DuaMunajatComponent } from './duamunajat/duamunajat.component';
import { AyatComponent } from './ayat/ayat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NodesComponent } from './nodes/nodes.component';
import { PermissionGuard } from '../auth/permission.guard';
import { EditServerGuard } from './servers/edit-server.guard';

const routes: Routes = [{
  path: "",
  component: OneComponent,
  canActivateChild: [PermissionGuard],
  children:[
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path: 'server', 
    component: ServersComponent, 
    children: [
      {path: ':id/edit', component: EditServerComponent, canActivate: [EditServerGuard]},
      {path: ':id', component: ServerComponent}
    ]},
    {path: 'user', component: UserComponent},
    {path: 'api', component: ApiDemoComponent, data: { permissions: ['api:demo'] }},
    {path: 'duamunajat', component: DuaMunajatComponent, data: { permissions: ['api:demo'] }},
    {path: 'ayat', component: AyatComponent, data: { permissions: ['api:demo'] }},
    {path: 'contacts', component: ContactsComponent, data: { permissions: ['api:demo'] }},
    {path: 'nodes', component: NodesComponent, data: { permissions: ['api:demo'] }},
  ]},
{path: '**', component: NoPageComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneRoutingModule {}

