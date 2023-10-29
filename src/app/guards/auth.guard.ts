import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  constructor(private afAuth: Auth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean | UrlTree>((observer) => {
      this.afAuth.onAuthStateChanged((user) => {
        if (user) {
          observer.next(true); // Usuario autenticado, permite la navegación.
          observer.complete();
        } else {
          // Usuario no autenticado, redirige a la página de inicio de sesión.
          observer.next(this.router.createUrlTree(['/login']));
          observer.complete();
        }
      });
    });
  }
}