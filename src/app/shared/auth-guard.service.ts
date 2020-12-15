import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
//stop the user from consulting paths that he is not allowed to ,by redirecting him to path "/auth"
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthentificationService,
    private router: Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.loggedIn) {
        return true;
      } else {
        this.router.navigate(['/login']);
      }
    }
  }

