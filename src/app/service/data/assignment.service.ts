import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assignment } from 'src/app/assignment/assignment.component';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http:HttpClient) { }

  getAssignments()
  {
    return this.http.get<Assignment[]>(`http://localhost:8080/assignments/${sessionStorage.getItem('username')}`)
  }

  getAssignmentById(id:number)
  {
      return this.http.get<Assignment>(`http://localhost:8080/assignment/id/${id}`)
  }

  deleteAssignmentforUser(id:number)
  {
    return this.http.delete<any>(`http://localhost:8080/assignment/${sessionStorage.getItem('username')}/${id}`)
  }

  uploadAssignment(formData:FormData, id:number)
  {
    return this.http.post(`http://localhost:8080/submit/${sessionStorage.getItem('username')}/${id}`, formData);
  }

}
