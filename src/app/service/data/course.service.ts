import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Course } from 'src/app/course/course.component';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
    
  constructor(private http:HttpClient) { }

  getCourses()
  {
    return this.http.get<Course[]>(`http://localhost:8080/courses/${sessionStorage.getItem('username')}`)
  }

  enrollCourse(id:number)
  {
    return this.http.get<any>(`http://localhost:8080/enroll/${sessionStorage.getItem('username')}/${id}`)
  }

}
