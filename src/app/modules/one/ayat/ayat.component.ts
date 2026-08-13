import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ApiDemoService, AyatItem } from '../api/api-demo.service';

@Component({
  selector: 'ayat-list-view',
  templateUrl: './ayat.component.html',
  styleUrls: ['./ayat.component.css']
})
export class AyatComponent implements OnInit {
  items: AyatItem[] = [];
  selectedSura = 'all';
  selectedSuraName = 'all';
  filterText = '';
  loading = false;
  error = '';
  status = 'Ready';

  constructor(private apiDemoService: ApiDemoService) {}

  ngOnInit(): void {
    this.load();
  }

  get suras(): string[] {
    return Array.from(new Set(this.items.map((item) => String(item.sura || '')).filter((sura) => !!sura)))
      .sort((left, right) => Number(left) - Number(right));
  }

  get suraNames(): string[] {
    return Array.from(new Set(this.items.map((item) => item.suraname || '').filter((name) => !!name))).sort();
  }

  get filteredItems(): AyatItem[] {
    const query = this.filterText.trim().toLowerCase();

    return this.items.filter((item) => {
      const sura = String(item.sura || '');
      const suraName = item.suraname || '';
      const matchesSura = this.selectedSura === 'all' || sura === this.selectedSura;
      const matchesSuraName = this.selectedSuraName === 'all' || suraName === this.selectedSuraName;
      const haystack = [item.ayat_id, item.sura, item.aya, item.suraname, item.Arabic, item.arabic2, item.muzibur]
        .join(' ')
        .toLowerCase();

      return matchesSura && matchesSuraName && (!query || haystack.includes(query));
    });
  }

  load(): void {
    this.loading = true;
    this.error = '';
    this.status = 'Loading ayat...';

    this.apiDemoService.getAyat().subscribe({
      next: (items: AyatItem[]) => {
        this.items = Array.isArray(items) ? items : [];
        this.status = 'Loaded';
      },
      error: (error: HttpErrorResponse) => {
        this.error = error.error?.message || error.error?.error || error.message || 'Failed to load ayat';
        this.status = 'Failed';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  clearFilters(): void {
    this.selectedSura = 'all';
    this.selectedSuraName = 'all';
    this.filterText = '';
  }
}