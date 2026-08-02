import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ZikrRoutingModule } from './zikr-routing.module';
import { AdminMembersComponent } from './admin-members.component';
import { ZikrComponent } from './zikr.component';

@NgModule({
  imports: [CommonModule, FormsModule, ZikrRoutingModule],
  declarations: [ZikrComponent, AdminMembersComponent]
})
export class ZikrModule {}