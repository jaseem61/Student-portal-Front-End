import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn:boolean=false;
  username:string='';
  password:string='';

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {

  }

  handleLogin()
  {
    this.authService.autheticate(this.username,this.password).subscribe(
      result =>{
          sessionStorage.setItem("username",this.username);
          sessionStorage.setItem("status",'true');
          this.loggedIn=true;
          this.router.navigate(['welcome'])
      },
      error => {
        console.log(error)
      }
    )
  }

}
