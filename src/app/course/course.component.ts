import { Router } from '@angular/router';
import { CourseService } from './../service/data/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses:Course[]=[
  ]

  constructor(private courseData:CourseService,private router:Router) { }

  loadCourse()
  {
    this.courseData.getCourses().subscribe(
      result =>
      {
        this.courses=result;
        
      },
      error=>{
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
    this.loadCourse();
  }

  handleEnroll(id:number)
  {
      this.courseData.enrollCourse(id).subscribe(
        result =>{
            this.loadCourse();
        },
        error =>{
        console.log(error);
        
        }
      )
  }

}


export class Course{
  constructor(public id:number,public name:string, public Tr_id:number){
    
  }
}