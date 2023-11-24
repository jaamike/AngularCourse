import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private _counter = new BehaviorSubject<number>(0);
  counter$ = this._counter.asObservable();

  increment() {
    this._counter.next(this._counter.value + 1);
  }

  decrement() {
    this._counter.next(this._counter.value - 1);
  }
}



