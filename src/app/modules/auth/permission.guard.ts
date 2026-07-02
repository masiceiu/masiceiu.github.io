import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.check(route, state.url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.check(route, state.url);
  }

  private check(route: ActivatedRouteSnapshot, returnUrl: string): boolean | UrlTree {
    const permissions = this.requiredPermissions(route);
    const roles = this.requiredRoles(route);

    if (permissions.length === 0 && roles.length === 0) {
      return true;
    }

    if (!this.authService.isLoggedIn) {
      return this.router.createUrlTree(['/auth/login'], { queryParams: { returnUrl } });
    }

    if (roles.length > 0 && !roles.includes(this.authService.role)) {
      return this.router.createUrlTree(['/auth/forbidden']);
    }

    if (!this.authService.hasAnyPermission(permissions)) {
      return this.router.createUrlTree(['/auth/forbidden']);
    }

    return true;
  }

  private requiredPermissions(route: ActivatedRouteSnapshot): string[] {
    return this.collectData(route, 'permissions');
  }

  private requiredRoles(route: ActivatedRouteSnapshot): string[] {
    return this.collectData(route, 'roles');
  }

  private collectData(route: ActivatedRouteSnapshot, key: 'permissions' | 'roles'): string[] {
    const values: string[] = [];
    let current: ActivatedRouteSnapshot | null = route;

    while (current) {
      const routeValue = current.data[key];
      if (Array.isArray(routeValue)) {
        values.push(...routeValue);
      }
      current = current.parent;
    }

    return values;
  }
}