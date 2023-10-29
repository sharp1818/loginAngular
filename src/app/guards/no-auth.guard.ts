import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class noAuthGuard implements CanActivate {
  constructor(private afAuth: Auth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean | UrlTree>((observer) => {
      this.afAuth.onAuthStateChanged((user) => {
        if (user) {
          observer.next(this.router.createUrlTree(['/userList']));
          observer.complete();
        } else {
          observer.next(true);
          observer.complete();
        }
      });
    });
  }
}