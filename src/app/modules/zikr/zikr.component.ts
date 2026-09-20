import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { ZikrService } from './zikr.service';

@Component({
  selector: 'app-zikr',
  templateUrl: './zikr.component.html',
  styleUrls: ['./zikr.component.css']
})
export class ZikrComponent {
  readonly targets = [3, 33, 99, 100];
  readonly zikrTypes = ['SU', 'Allah', 'Astaghfirullah'];

  count = 0;
  countTarget = 3;
  zikrType = 'SU';
  completedTargets = 0;
  saving = false;
  loading = false;
  status = 'Ready';
  private previousCountTarget = this.countTarget;
  private progressSaveTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(private zikrService: ZikrService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadActivityState();
  }

  get percent(): number {
    return Math.floor((this.count / this.countTarget) * 100);
  }

  get circleBackground(): string {
    const degree = (this.percent / 100) * 360;
    return `conic-gradient(green ${degree}deg, #d9d9d9 ${degree}deg)`;
  }

  confirmTargetChange(nextTarget: number): void {
    this.cancelProgressSave();

    if (this.count === 0) {
      this.previousCountTarget = nextTarget;
      this.loadActivityState();
      return;
    }

    if (window.confirm('Confirm for reset?')) {
      this.resetCounter();
      this.previousCountTarget = nextTarget;
      this.loadActivityState();
    } else {
      this.countTarget = this.previousCountTarget;
      this.loadActivityState();
    }
  }

  confirmZikrTypeChange(): void {
    this.cancelProgressSave();
    this.loadActivityState();
  }

  increment(): void {
    if (this.count >= this.countTarget) {
      return;
    }

    this.count++;
  this.persistLocalProgress();
    this.scheduleProgressSave();
  }

  completeTarget(): void {
    if (this.count !== this.countTarget || this.saving) {
      return;
    }

    this.cancelProgressSave();
    const previousCompletedTargets = this.completedTargets;
    const completedTargets = previousCompletedTargets + 1;
    this.completedTargets = completedTargets;
    this.saving = true;
    this.status = 'Saving...';

    this.zikrService.save({
      date: this.today(),
      count: this.count,
      activityId: this.activityId,
      clientId: `${this.today()}-${this.activityId}-${completedTargets}`,
      targetCount: this.countTarget,
      totalCount: completedTargets * this.countTarget,
      completed: true
    }).subscribe({
      next: (response) => {
        if (response.success) {
          this.count = 0;
          this.persistLocalProgress();
          this.status = 'Saved';
        } else {
          this.restoreCompletedTargets(previousCompletedTargets, response.error || 'Save failed');
        }
      },
      error: () => this.restoreCompletedTargets(previousCompletedTargets, 'Save failed'),
      complete: () => {
        this.saving = false;
      }
    });
  }

  resetCounter(): void {
    this.cancelProgressSave();
    this.count = 0;
    this.persistLocalProgress();
    this.status = 'Ready';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }

  private get activityId(): string {
    return `${this.zikrType}(${this.countTarget})`;
  }

  private loadActivityState(): void {
    const localProgress = this.readLocalProgress();
    this.count = Math.min(localProgress.count, this.countTarget);
    this.completedTargets = localProgress.completedTargets;
    this.loading = true;
    this.status = 'Loading...';

    this.zikrService.load(this.activityId).subscribe({
      next: (response) => {
        const progress = response.progress || {};
        this.count = Math.min(progress.count || 0, this.countTarget);
        this.completedTargets = progress.completedTargets || 0;
        this.persistLocalProgress();
        this.status = 'Ready';
      },
      error: () => {
        this.status = 'Using local progress';
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  private scheduleProgressSave(): void {
    if (this.progressSaveTimer) {
      clearTimeout(this.progressSaveTimer);
    }

    this.progressSaveTimer = setTimeout(() => {
      this.progressSaveTimer = null;
      this.zikrService.saveProgress({
        activityId: this.activityId,
        targetCount: this.countTarget,
        count: this.count
      }).subscribe({
        error: () => this.status = 'Progress save failed'
      });
    }, 250);
  }

  private cancelProgressSave(): void {
    if (!this.progressSaveTimer) {
      return;
    }

    clearTimeout(this.progressSaveTimer);
    this.progressSaveTimer = null;
  }

  private restoreCompletedTargets(count: number, status: string): void {
    this.completedTargets = count;
    this.persistLocalProgress();
    this.status = status;
    this.saving = false;
  }

  private get progressStorageKey(): string {
    const session = this.authService.session;
    const user = session?.uid || session?.id || session?.email || 'guest';
    return `zikr-progress:${user}:${this.activityId}`;
  }

  private readLocalProgress(): { count: number; completedTargets: number } {
    try {
      const stored = JSON.parse(localStorage.getItem(this.progressStorageKey) || '{}');
      return {
        count: Number.isFinite(stored.count) ? Math.max(0, stored.count) : 0,
        completedTargets: Number.isFinite(stored.completedTargets) ? Math.max(0, stored.completedTargets) : 0
      };
    } catch {
      return { count: 0, completedTargets: 0 };
    }
  }

  private persistLocalProgress(): void {
    localStorage.setItem(this.progressStorageKey, JSON.stringify({
      count: this.count,
      completedTargets: this.completedTargets
    }));
  }

  private today(): string {
    return new Date().toISOString().split('T')[0];
  }
}