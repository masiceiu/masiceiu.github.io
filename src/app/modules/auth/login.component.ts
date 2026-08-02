import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService, LoginRequest } from './auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false;
  error = '';
  request: LoginRequest = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    if (this.canRefresh) {
      this.refreshSession();
    }
  }

  get canRefresh(): boolean {
    return !!this.authService.session?.refresh_token;
  }

  login(): void {
    this.loading = true;
    this.error = '';

    this.authService.login(this.request).subscribe({
      next: () => {
        this.navigateAfterLogin();
      },
      error: (error: unknown) => {
        this.error = this.formatError(error);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  refreshSession(): void {
    this.loading = true;
    this.error = '';

    this.authService.refreshAccessToken().subscribe({
      next: () => this.navigateAfterLogin(),
      error: (error: unknown) => {
        this.error = this.formatError(error);
        this.authService.logout();
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  private navigateAfterLogin(): void {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/my/home';
    this.router.navigateByUrl(returnUrl === '/auth/login' ? '/my/home' : returnUrl);
  }

  private formatError(error: unknown): string {
    if (typeof error === 'string') {
      return error;
    }

    if (error && typeof error === 'object' && 'message' in error) {
      return String(error.message);
    }

    return 'Login failed';
  }
}