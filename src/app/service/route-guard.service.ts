import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(sessionStorage.getItem('username')==route.params['username'])
    {
    return true;
    }
    else{
      return false;
    }
  }

  constructor(private authService:AuthService) { }
}


// return this.authService.isUserLoggedIn();