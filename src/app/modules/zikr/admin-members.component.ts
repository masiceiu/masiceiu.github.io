import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { AdminMember, AdminMemberRequest, ZikrService } from './zikr.service';

@Component({
  selector: 'zikr-admin-members',
  templateUrl: './admin-members.component.html',
  styleUrls: ['./admin-members.component.css']
})
export class AdminMembersComponent implements OnInit {
  readonly availablePermissions = [
    { id: 'zikr:save', label: 'Save Zikr' },
    { id: 'api:demo', label: 'API Pages' },
    { id: 'admin:members', label: 'Members Admin' }
  ];

  members: AdminMember[] = [];
  filterText = '';
  roleFilter = 'all';
  permissionFilter = 'all';
  loading = false;
  saving = false;
  status = 'Ready';
  error = '';
  editingMember: AdminMember | null = null;
  form: AdminMemberRequest = this.emptyForm();

  constructor(private zikrService: ZikrService) {}

  ngOnInit(): void {
    this.load();
  }

  get roles(): string[] {
    return Array.from(new Set(this.members.map((member) => member.role).filter((role) => !!role))).sort();
  }

  get filteredMembers(): AdminMember[] {
    const query = this.filterText.trim().toLowerCase();

    return this.members.filter((member) => {
      const matchesRole = this.roleFilter === 'all' || member.role === this.roleFilter;
      const permissions = member.permissions || [];
      const matchesPermission = this.permissionFilter === 'all' || permissions.includes(this.permissionFilter);
      const haystack = [member.id, member.email, member.role, ...permissions].join(' ').toLowerCase();
      return matchesRole && matchesPermission && (!query || haystack.includes(query));
    });
  }

  load(): void {
    this.loading = true;
    this.error = '';
    this.status = 'Loading members...';

    this.zikrService.getMembers().subscribe({
      next: (response) => {
        this.members = response.data || [];
        this.status = 'Loaded';
      },
      error: (error: HttpErrorResponse) => {
        this.error = this.formatError(error);
        this.status = 'Failed';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  edit(member: AdminMember): void {
    this.editingMember = member;
    this.form = {
      email: member.email,
      role: member.role || 'user',
      password: '',
      permissions: [...(member.permissions || [])]
    };
  }

  cancelEdit(): void {
    this.editingMember = null;
    this.form = this.emptyForm();
    this.error = '';
  }

  saveMember(): void {
    if (!this.form.email.trim()) {
      this.error = 'Email is required';
      return;
    }

    if (!this.editingMember && !this.form.password) {
      this.error = 'Password is required for new members';
      return;
    }

    this.saving = true;
    this.error = '';
    this.status = this.editingMember ? 'Updating member...' : 'Creating member...';

    const request: AdminMemberRequest = {
      email: this.form.email.trim(),
      role: this.form.role,
      password: this.form.password || undefined,
      permissions: this.form.permissions || []
    };

    const request$ = this.editingMember?.id
      ? this.zikrService.updateMember(this.editingMember.id, request)
      : this.zikrService.createMember(request);

    request$.subscribe({
      next: () => {
        this.status = this.editingMember ? 'Member updated' : 'Member created';
        this.cancelEdit();
        this.load();
      },
      error: (error: HttpErrorResponse) => {
        this.error = this.formatError(error);
        this.status = 'Save failed';
        this.saving = false;
      },
      complete: () => {
        this.saving = false;
      }
    });
  }

  private emptyForm(): AdminMemberRequest {
    return {
      email: '',
      password: '',
      role: 'user',
      permissions: ['zikr:save']
    };
  }

  hasPermission(permission: string): boolean {
    return (this.form.permissions || []).includes(permission);
  }

  togglePermission(permission: string, checked: boolean): void {
    const permissions = new Set(this.form.permissions || []);
    if (checked) {
      permissions.add(permission);
    } else {
      permissions.delete(permission);
    }

    this.form.permissions = Array.from(permissions);
  }

  permissionsText(member: AdminMember): string {
    return (member.permissions || []).join(', ') || 'none';
  }

  private formatError(error: HttpErrorResponse): string {
    return error.error?.message || error.error?.error || error.message || 'Request failed';
  }
}