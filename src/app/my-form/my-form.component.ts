import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent {
  myFormGroup: FormGroup;

  constructor() {
    this.myFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
 
  ngOnInit(): void {
    this.myFormGroup.patchValue(this.data);
  }
  data = {
    username: 'admin',
    password: 'password@admin'
  }

  // ngOnInit(): void {
  //   this.myFormGroup.controls['username'].setValue('admin');
  // }
  onSubmit() {
    console.log('Form submitted!', this.myFormGroup.value);
  }
}




// import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-my-form',
//   templateUrl: './my-form.component.html',
//   styleUrls: ['./my-form.component.scss']
// })
// export class MyFormComponent{
 
//   myFormGroup: FormGroup;

//   constructor() {
//     this.myFormGroup = new FormGroup({
//       username: new FormControl(''),
//       password: new FormControl(''),
//     });
//   }

//   onSubmit() {
//     console.log('Form submitted!', this.myFormGroup.value);
//   }
// }
