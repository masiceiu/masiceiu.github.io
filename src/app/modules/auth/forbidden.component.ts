import { Component } from '@angular/core';

@Component({
  selector: 'auth-forbidden',
  template: `
    <div class="auth-page">
      <section class="auth-panel">
        <h3>Forbidden</h3>
        <p>You do not have permission to open this page.</p>
        <a routerLink="/my/home">Go home</a>
      </section>
    </div>
  `,
  styles: [`
    .auth-page { display: flex; justify-content: center; padding: 48px 16px; }
    .auth-panel { width: min(420px, 100%); padding: 24px; border: 1px solid #d8d8d8; border-radius: 6px; background: #fff; }
  `]
})
export class ForbiddenComponent {}