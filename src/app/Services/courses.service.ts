import { Injectable } from '@angular/core';
import { Course } from '../Interfaces/Course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  private server:string = 'http://localhost:3000';

  constructor(private http:HttpClient) {
    

   }

   getCourses(){
    return this.http.get(`${this.server}/courses`);
   }

   deleteCourse(id:number){
     return this.http.delete(`${this.server}/courses/${id}`);

   }

   postCourse(course:Course){
     return this.http.post(`${this.server}/courses`,JSON.stringify(course))
   }

   updateCourse(id:number,course:Course){
    return this.http.put(`${this.server}/courses/${id}`,JSON.stringify(course))
   }
}
