import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UsuarioService } from '../data/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class NoauthGuard implements CanActivate, CanActivateChild {

  constructor( private usuarioService: UsuarioService,
                private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      return this.usuarioService.validarNoToken()
              .pipe(
                tap( resp => {
                  if (!resp) {
                    this.router.navigateByUrl('/app/dashboards/all/subjects/data-list');
                  }
                })
              );
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      return this.usuarioService.validarNoToken()
              .pipe(
                tap( resp => {
                  if (!resp) {
                    this.router.navigateByUrl('/app/dashboards/all/subjects/data-list');
                  }
                })
              );
  }
}
