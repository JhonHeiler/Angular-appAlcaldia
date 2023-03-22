import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse, AuthPermiss } from '../interfaces/login.interfaces';

type permissionParams = {
  auto?: boolean;
  currentPath?: string;
};

@Injectable({
  providedIn: 'root',
})
export class GetPermissionService {
  private UNAUTHORIZED_PATH = '/unauthorized';

  constructor(private router: Router) {}

  private unauthorized(): void {
    this.router.navigate([this.UNAUTHORIZED_PATH]);
  }

  getPermissions(
    args: permissionParams = {
      auto: true,
      currentPath: this.router.routerState.snapshot.url,
    }
  ): AuthPermiss {
    const userData: AuthResponse = JSON.parse(
      window.localStorage.getItem('auth')
    );
    const permiss = userData.permisos.find((e) => e.url === args.currentPath);

    if (args.auto && (!permiss || !permiss.read)) this.unauthorized();

    return {
      id_permisos: permiss ? permiss.id_permisos : 0,
      id_rol: permiss ? permiss.id_rol : 0,
      url: permiss ? permiss.url : args.currentPath,
      create: permiss ? permiss.create : 0,
      read: permiss ? permiss.read : 0,
      update: permiss ? permiss.update : 0,
      delete: permiss ? permiss.delete : 0,
    };
  }
}
