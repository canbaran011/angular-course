import { Component, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];

  // onCardClicked() {
  //   console.log("card component clicked");
    
  // }

  onCourseSelected(course: Course) {
    console.log("On Course Selected !", course);
    
  }
}
