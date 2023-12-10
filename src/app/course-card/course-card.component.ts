import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
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
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit{


  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  // @ContentChild('courseImage') //using with ngcontent 
  // image;

  @ContentChildren(CourseImageComponent, { read: ElementRef})
  images: QueryList<CourseImageComponent>;

  ngAfterViewInit() {
    // console.log("image", this.images);
  }

  ngOnInit(): void {
     
  }
  ngAfterContentInit(): void {
     console.log("images", this.images);
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
