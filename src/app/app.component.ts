import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, Injector, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';
import {CoursesService} from './courses/courses.service';
import {createCustomElement} from '@angular/elements';
import {CourseTitleComponent} from './course-title/course-title.component';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import {CourseImageComponent} from './courses/course-image/course-image.component';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CourseCardComponent,
    CourseImageComponent,
    NgForOf
  ],
  standalone: true
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;

  footerText: string = "FOOTER TEXT";

  @ViewChild('cardRef1', {read: ElementRef}) 
  card1: CourseCardComponent;

  // @ViewChild('cardRef2') //CourseCardComponent
  // card2: CourseCardComponent;

  // @ViewChild('courseImage') //cant do this here NO
  // courseImage: ElementRef;

  @ViewChild('container')
  containerDiv: ElementRef;

  @ViewChildren(CourseCardComponent, { read: ElementRef})
  cards: QueryList<ElementRef>;

  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];

  constructor() {
    // console.log('containerDiv', this.containerDiv);
    
  }
  ngAfterViewInit(): void {
    // console.log("afterViewInit ",this.containerDiv);
    // console.log("courseImage", this.courseImage);
    // console.log("VChildren ", this.cards);
    // this.courses[0].description = 'test'; //avoid modification in here
    
    this.cards.changes.subscribe(
      cards => console.log(cards)
    )
  
  }

  // onCardClicked() {
  //   console.log("card component clicked");
    
  // }

  onCourseSelected(course: Course) {
    // console.log("On Course Selected !", course);
    console.log("card1", this.card1);
    console.log("container", this.containerDiv);
    // console.log("card2", this.card2);
    
  }

  onFooterSelected(some: any) {
    console.log(some)
  }

  onCoursesEdited() {
    this.courses.push(
      {
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
    }
    )
  }
}
