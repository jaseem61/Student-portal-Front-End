import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardLogoutService implements CanActivate {

  constructor() { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(sessionStorage.getItem('username')&& !sessionStorage.getItem('status'))
      {
        sessionStorage.removeItem('username')
        return true
      }
      else{
        return false
      }
  }
  
}
