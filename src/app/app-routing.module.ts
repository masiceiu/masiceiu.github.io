import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';
const routes: Routes = [
  {
    path: 'my', 
    loadChildren: () =>import("./modules/one/one.module").then(m => m.OneModule),
    //loadChildren: () =>import("./modules/admin/admin.module").then(m => m.AdminModule),
    data: {
      title: "my"
    }
  },
  { path: 'profile', component: ProfileComponent},
  { path: '', redirectTo: '/my', pathMatch: 'full'},
  { path: '*', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
