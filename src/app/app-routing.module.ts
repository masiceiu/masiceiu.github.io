import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { UserComponent } from './users/user.component';
//import { ServersComponent } from './servers/servers.component';
//import { HomeComponent } from './home/home.component';
//import { ServerComponent } from './servers/server/server.component';
//import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { AppComponent, NoPageComponent} from './app.component';

const routes: Routes = [{
  path: "",
  component: AppComponent,
  children:[
    /*{path:'home', component: HomeComponent},
    {path: 'server', 
    component: ServersComponent, 
    children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent}
    ]},
    {path: 'user', component: UserComponent},*/
    //{path: '' , redirectTo: '/home' ,pathMatch: 'full'},
  ]},
{path: '**', component: NoPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

