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
  saving = false;
  status = 'Ready';

  constructor(private zikrService: ZikrService, private authService: AuthService, private router: Router) {}

  get percent(): number {
    return Math.floor((this.count / this.countTarget) * 100);
  }

  get circleBackground(): string {
    const degree = (this.percent / 100) * 360;
    return `conic-gradient(green ${degree}deg, #d9d9d9 ${degree}deg)`;
  }

  confirmTargetChange(): void {
    if (this.count === 0 || this.count === this.countTarget) {
      return;
    }

    if (window.confirm('Confirm for reset?')) {
      this.resetCounter();
    }
  }

  increment(): void {
    if (this.count >= this.countTarget) {
      return;
    }

    this.count++;
    this.saveZikr();
  }

  resetCounter(): void {
    this.count = 0;
    this.status = 'Ready';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }

  private saveZikr(): void {
    this.saving = true;
    this.status = 'Saving...';

    this.zikrService.save({
      date: this.today(),
      count: this.count
    }).subscribe({
      next: (response) => {
        this.status = response.success ? 'Saved' : (response.error || 'Saved');
      },
      error: () => {
        this.status = 'Save failed';
        this.saving = false;
      },
      complete: () => {
        this.saving = false;
      }
    });
  }

  private today(): string {
    return new Date().toISOString().split('T')[0];
  }
}