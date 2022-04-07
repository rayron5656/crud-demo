import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:Course[] = [];

  constructor(private _courseService:CoursesService) {
    this.courses = _courseService.getCourses();
   }

  ngOnInit(): void {
  }

}
