import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableCounterAppComponent } from './observable-counter-app.component';

describe('ObservableCounterAppComponent', () => {
  let component: ObservableCounterAppComponent;
  let fixture: ComponentFixture<ObservableCounterAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableCounterAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableCounterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
