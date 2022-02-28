import { AssignmentService } from './../service/data/assignment.service';
import { Assignment } from 'src/app/assignment/assignment.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-assignment',
  templateUrl: './view-assignment.component.html',
  styleUrls: ['./view-assignment.component.css']
})
export class ViewAssignmentComponent implements OnInit {
  file!:File
  formData = new FormData();

  fileName!:string
  btnStatus:boolean=false;

  assignment:Assignment = new Assignment(0,'','')
  id!:number

  constructor(private activatedRoute:ActivatedRoute , 
    private assignmentService:AssignmentService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.params['id'];
    this.assignmentService.getAssignmentById(this.id).subscribe(
      result =>{
        this.assignment=result;
        console.log("assignmnet copy done");
      },
      error => {
        console.log(error)
      }
    )
  }

  handleSubmission()
  {
    
    this.assignmentService.uploadAssignment(this.formData,this.id).subscribe(
      result => {
        console.log(result);
      }
    )
    this.assignmentService.deleteAssignmentforUser(this.id).subscribe(
      result =>{
        console.log('delete success');
        this.router.navigate(['/assignments',sessionStorage.getItem('username')])
      },
      error =>{
      console.log('delete failed');
      
      }
    )
    
  }

  onFileSelected(event:any)
  {
    this.file = event.target.files[0];

    if (this.file) {

        this.fileName = this.file.name;
        if(this.formData.get("file")!=null)
        {
          this.formData.delete("file")
        }
        this.formData.append("file", this.file);
        this.btnStatus=true

        // this.assignmentService.uploadAssignment(this.formData,this.id).subscribe(
        //   result => {
        //     console.log(result);
        //   }
        // )
    }
  }
}

