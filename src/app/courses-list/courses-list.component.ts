import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  courses = [
    { id: 1, name: 'Angular Basics' },
    { id: 2, name: 'Angular Services' },
    { id: 3, name: 'Angular Routing' },
  ];

  constructor(private router: Router) {}

  goToDetail(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }
}




