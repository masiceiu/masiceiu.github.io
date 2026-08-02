import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminMembersComponent } from './admin-members.component';
import { PermissionGuard } from '../auth/permission.guard';
import { ZikrComponent } from './zikr.component';

const routes: Routes = [
  {
    path: '',
    component: ZikrComponent,
    canActivate: [PermissionGuard],
    data: { permissions: ['zikr:save'] }
  },
  {
    path: 'admin/members',
    component: AdminMembersComponent,
    canActivate: [PermissionGuard],
    data: { permissions: ['admin:members'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZikrRoutingModule {}