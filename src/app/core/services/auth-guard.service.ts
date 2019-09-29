import { Injectable } from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getAuthentication()
      .then(
        (isAuthenticated: boolean) => {
          if (isAuthenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
            alert('please authorize');
            return false;
          }
        }
      );
  }
}
