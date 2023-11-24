
//counter.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset  } from 'src/store/counter.actions';
import { selectCounter } from 'src/store/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter$ = this.store.select(selectCounter);
  constructor(private store: Store) {}
  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}






