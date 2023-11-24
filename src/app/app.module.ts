//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularPracticeComponent } from './angular-practice/angular-practice.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { PiepsComponent } from './pieps/pieps.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ObservableCounterAppComponent } from './observable-counter-app/observable-counter-app.component';
import { NumberDisplayComponent } from './number-display/number-display.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TaskComponent } from './task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { MyFormArrayComponent } from './my-form-array/my-form-array.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component'; 
import { counterReducer  } from 'src/store/counter.reducer';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularPracticeComponent,
    ParentComponent,
    ChildComponent,
    PiepsComponent,
    ItemListComponent,
    MyFormComponent,
    ObservableCounterAppComponent,
    NumberDisplayComponent,
    ItemDetailComponent,
    HomeComponent,
    AboutComponent,
    TaskComponent,
    MyFormArrayComponent,
    CounterComponent,
    CoursesListComponent,
    CourseDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      counter: counterReducer ,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
