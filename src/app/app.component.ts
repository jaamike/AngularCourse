import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks!: any[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      console.log(tasks); // Log the received tasks to the console
      this.tasks = tasks;
    });
  }
  

}

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'Hello World';

// constructor(private router: Router) {}

// onNavigateToAbout() {
//   this.router.navigateByUrl('/about');
// }

// }
