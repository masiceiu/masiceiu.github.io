import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class EditServerGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (route.queryParamMap.get('allowEdit') === '1') {
      return true;
    }

    return this.router.createUrlTree(['/auth/forbidden'], {
      queryParams: { returnUrl: state.url }
    });
  }
}