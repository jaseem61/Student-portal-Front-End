import { AssignmentService } from './../service/data/assignment.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor(private router:Router,private service:AssignmentService) { }

  assignments:Assignment[]=[
  ]
  ngOnInit(): void {

   this.service.getAssignments().subscribe(
     result =>{
       this.assignments=result
       console.log(this.assignments);
      
       
     },
     error => {
       console.log(error)
     }
   )
  }


  handleAssignment(id:number)
  {
        this.router.navigate(['view/assignment',sessionStorage.getItem('username'),id])
  }

}

// c_id:number
export class Assignment{
  constructor(public id:number,public name:string, public description:string){

  }

}
