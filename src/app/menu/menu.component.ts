import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService:AuthService,private router:Router) { }
  ngOnInit(): void {
  }

  handleLogout()
  {
    this.authService.logOutUser();
    this.router.navigate(['logout']);
  }

  handleHome()
  {
    if(sessionStorage.getItem('status'))
    {
      this.router.navigate(['welcome'])
    }
    else{
      this.router.navigate([''])
    }
  }
  handleCourse()
  {
      this.router.navigate(['courses',sessionStorage.getItem('username')])
  }

  handleAssignment()
  {
    console.log("hello assignment");
    
    this.router.navigate(['/assignments',sessionStorage.getItem('username')])
  }

}
