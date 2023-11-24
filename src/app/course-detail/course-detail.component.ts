import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {
  course: { id: number; name: string };

  constructor(private route: ActivatedRoute) {
    this.course = {
      id: parseInt(this.route.snapshot.paramMap.get('id') || '0'),
      name: 'Course Name',
    };
  }
}


