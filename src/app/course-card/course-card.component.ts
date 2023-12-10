import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  // @ContentChild('courseImage') //using with ngcontent 
  // image;

  @ContentChild(CourseImageComponent, { read: ElementRef})
  image;

  ngAfterViewInit() {
    console.log("image", this.image);
  }
  
  onCourseViewed() {
    console.log("clicked");
    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;    
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
        return 'beginner';//[could be an array...]   
    }

    // return {
    //   'beginner': this.course.category === 'BEGINNER'
    // }
  }

  cardStyles() {
    return {
      'text-decoration': 'underline'
    }
  }
}
