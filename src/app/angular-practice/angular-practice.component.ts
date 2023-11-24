import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-practice',
  templateUrl: './angular-practice.component.html',
  styleUrls: ['./angular-practice.component.scss']
})
export class AngularPracticeComponent {
// Define a property in the component
message = "Let's learn about property binding";
imageUrl = 'https://example.com/image.jpg';
}

