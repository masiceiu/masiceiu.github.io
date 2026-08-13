import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ApiDemoService, DuaMunajatItem } from '../api/api-demo.service';

@Component({
  selector: 'dua-munajat-view',
  templateUrl: './duamunajat.component.html',
  styleUrls: ['./duamunajat.component.css']
})
export class DuaMunajatComponent implements OnInit {
  items: DuaMunajatItem[] = [];
  filterText = '';
  selectedType = 'all';
  loading = false;
  error = '';

  constructor(private apiDemoService: ApiDemoService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = '';

    this.apiDemoService.getDuaMunajat().subscribe({
      next: (items: DuaMunajatItem[]) => {
        this.items = Array.isArray(items) ? items : [];
      },
      error: (error: HttpErrorResponse) => {
        this.error = error.error?.message || error.error?.error || error.message || 'Failed to load dua munajat data';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  get types(): string[] {
    return Array.from(new Set(this.items.map((item) => item.type || '').filter((type) => !!type))).sort();
  }

  get filteredItems(): DuaMunajatItem[] {
    const query = this.filterText.trim().toLowerCase();

    return this.items.filter((item) => {
      const matchesType = this.selectedType === 'all' || item.type === this.selectedType;
      const haystack = [item.title, item.arabic, item.translate, item.ref, item.type].join(' ').toLowerCase();
      return matchesType && (!query || haystack.includes(query));
    });
  }
}