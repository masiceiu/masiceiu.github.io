import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ApiDemoService, NodeItem } from '../api/api-demo.service';

@Component({
  selector: 'nodes-list-view',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {
  items: NodeItem[] = [];
  filterText = '';
  selectedParent = 'all';
  selectedParentIndex = 'all';
  loading = false;
  error = '';
  status = 'Ready';

  constructor(private apiDemoService: ApiDemoService) {}

  ngOnInit(): void {
    this.load();
  }

  get parents(): string[] {
    return this.uniqueValues('NodeParent');
  }

  get parentIndexes(): string[] {
    return this.uniqueValues('ParentIndex');
  }

  get filteredItems(): NodeItem[] {
    const query = this.filterText.trim().toLowerCase();

    return this.items.filter((item) => {
      const parent = String(item.NodeParent || '');
      const parentIndex = String(item.ParentIndex || '');
      const matchesParent = this.selectedParent === 'all' || parent === this.selectedParent;
      const matchesParentIndex = this.selectedParentIndex === 'all' || parentIndex === this.selectedParentIndex;
      const haystack = [item.NodeID, item.NodeKey, item.NodeValue, item.NodeParent, item.ParentIndex]
        .join(' ')
        .toLowerCase();

      return matchesParent && matchesParentIndex && (!query || haystack.includes(query));
    });
  }

  load(): void {
    this.loading = true;
    this.error = '';
    this.status = 'Loading nodes...';

    this.apiDemoService.getNodes().subscribe({
      next: (items) => {
        this.items = Array.isArray(items) ? items : [];
        this.status = 'Loaded';
      },
      error: (error: HttpErrorResponse) => {
        this.error = error.error?.message || error.error?.error || error.message || 'Failed to load nodes';
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
    this.selectedParent = 'all';
    this.selectedParentIndex = 'all';
  }

  private uniqueValues(key: 'NodeParent' | 'ParentIndex'): string[] {
    return Array.from(new Set(this.items.map((item) => String(item[key] || '')).filter((value) => !!value)))
      .sort((left, right) => Number(left) - Number(right));
  }
}