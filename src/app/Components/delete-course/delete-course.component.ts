import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';


@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {
  

  id:number = 0;

  constructor(private route:ActivatedRoute,private _courseService:CoursesService,private _router:Router) {
    this.route.params
    .subscribe(params => {
      this.id = params['id'];
    })

   }

  ngOnInit(): void {
  }

  onDelete(){
    this._courseService.deleteCourse(this.id)
    .subscribe((res:any) => {this._router.navigate(['courses'])})
    ;
  }

}
