import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
