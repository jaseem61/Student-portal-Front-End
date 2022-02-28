import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardBasicService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authService.isUserLoggedIn();
  }


  constructor(private authService:AuthService) { }
}

