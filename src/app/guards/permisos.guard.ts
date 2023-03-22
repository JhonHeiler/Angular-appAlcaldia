import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { AuthResponse } from '../interfaces/login.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLogging(this.router.url);
  }

  private checkLogging(url: string): boolean {
    const authResponse: string = localStorage.getItem('auth');
    if (!authResponse) return false;
    return this.checkPermissions(JSON.parse(authResponse), url);
  }

  private checkPermissions(authData: AuthResponse, url: string): boolean {
    const permissions = authData.permisos.filter((auth) => {
      return auth.url === url;
    });

    if (!permissions.length) return false;
    return true;
  }
}
