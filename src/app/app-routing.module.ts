import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'my', 
    loadChildren: () =>import("./modules/one/one.module").then(m => m.OneModule),
    //loadChildren: () =>import("./modules/admin/admin.module").then(m => m.AdminModule),
    data: {
      title: "my"
    }
  },
  {
    path: 'zikr',
    loadChildren: () => import('./modules/zikr/zikr.module').then(m => m.ZikrModule)
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
