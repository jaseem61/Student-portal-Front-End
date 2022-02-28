import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  autheticate(username:string,password:string)
  {
    return this.http.post<any>("http://localhost:8080/authentication",{username:username,password:password})
  }


  logOutUser()
  {
     sessionStorage.removeItem('status')
  }

  isUserLoggedIn()
  {
    if(sessionStorage.getItem('status'))
    {
      return true
    }
    else{
      return false;
    }
  }


}
