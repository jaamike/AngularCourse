import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form-array',
  templateUrl: './my-form-array.component.html',
  styleUrls: ['./my-form-array.component.scss']
})
export class MyFormArrayComponent {
  myForm!: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      items: new FormArray([]),
    });
  }

  get items(): FormArray {
    return this.myForm.get('items') as FormArray;
  }
  addItem() {
    const newItem = this.createItemFormGroup();
    this.items.push(newItem);
  }
  createItemFormGroup() {
    return new FormGroup({
      name: new FormControl(''),
      quantity: new FormControl(''),
    });
  }

  onSubmit() {
    console.log('Form submitted!', this.myForm.value);
  }
}

