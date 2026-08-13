import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ApiDemoService, ContactItem } from '../api/api-demo.service';

@Component({
  selector: 'contacts-list-view',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  items: ContactItem[] = [];
  filterText = '';
  selectedGroup = 'all';
  selectedOperator = 'all';
  loading = false;
  error = '';
  status = 'Ready';

  constructor(private apiDemoService: ApiDemoService) {}

  ngOnInit(): void {
    this.load();
  }

  get groups(): string[] {
    return this.uniqueValues('GroupID');
  }

  get operators(): string[] {
    return this.uniqueValues('CellOperatorID');
  }

  get filteredItems(): ContactItem[] {
    const query = this.filterText.trim().toLowerCase();

    return this.items.filter((item) => {
      const group = String(item.GroupID || '');
      const operator = String(item.CellOperatorID || '');
      const matchesGroup = this.selectedGroup === 'all' || group === this.selectedGroup;
      const matchesOperator = this.selectedOperator === 'all' || operator === this.selectedOperator;
      const haystack = [item.ContactName, item.ContactNumber, item.GroupID, item.RemainderID, item.CellOperatorID]
        .join(' ')
        .toLowerCase();

      return matchesGroup && matchesOperator && (!query || haystack.includes(query));
    });
  }

  load(): void {
    this.loading = true;
    this.error = '';
    this.status = 'Loading contacts...';

    this.apiDemoService.getContacts().subscribe({
      next: (items: ContactItem[]) => {
        this.items = Array.isArray(items) ? items : [];
        this.status = 'Loaded';
      },
      error: (error: HttpErrorResponse) => {
        this.error = error.error?.message || error.error?.error || error.message || 'Failed to load contacts';
        this.status = 'Failed';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  clearFilters(): void {
    this.filterText = '';
    this.selectedGroup = 'all';
    this.selectedOperator = 'all';
  }

  private uniqueValues(key: 'GroupID' | 'CellOperatorID'): string[] {
    return Array.from(new Set(this.items.map((item) => String(item[key] || '')).filter((value) => !!value)))
      .sort((left, right) => Number(left) - Number(right));
  }
}