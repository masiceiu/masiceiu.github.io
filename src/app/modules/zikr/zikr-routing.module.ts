import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PermissionGuard } from '../auth/permission.guard';
import { ZikrComponent } from './zikr.component';

const routes: Routes = [
  {
    path: '',
    component: ZikrComponent,
    canActivate: [PermissionGuard],
    data: { permissions: ['zikr:save'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZikrRoutingModule {}