import { Component } from '@angular/core';

@Component({
  selector: 'app-pieps',
  template: `
    <p>Sliced Array: {{ array | slice:1:3 }}</p>
    <p>Sliced String: {{ text | slice:0:5 }}</p>
  `,
})
export class PiepsComponent {
  array: number[] = [1, 2, 3, 4, 5];
  text: string = 'Angular is awesome!';
}













// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-pieps',
//   template: `
//   <p>Price: {{ price | currency:'USD':'symbol' }}</p>
// `,
// })
// export class PiepsComponent {
//   price: number = 1234.56;
// }




// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-pieps',
//   template: `
//   <p>Today's date is: {{ today | date:'dd/MM/yyyy' }}</p>
// `,
// })
// export class PiepsComponent {
//   today: Date = new Date();
// }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-pieps',
//   template: `
//     <p>Original text: {{ text }}</p>
//     <p>Uppercase: {{ text | uppercase }}</p>
//     <p>Lowercase: {{ text | lowercase }}</p>
//   `,
// })
// export class PiepsComponent {
//   text: string = 'Hello, Angular!';
// }

