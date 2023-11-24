import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormArrayComponent } from './my-form-array.component';

describe('MyFormArrayComponent', () => {
  let component: MyFormArrayComponent;
  let fixture: ComponentFixture<MyFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
