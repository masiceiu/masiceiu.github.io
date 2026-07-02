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

  login(): void {
    this.loading = true;
    this.error = '';

    this.authService.login(this.request).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/my/home';
        this.router.navigateByUrl(returnUrl);
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