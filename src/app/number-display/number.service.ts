// number.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  private numbersSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  numbers$: Observable<number[]> = this.numbersSubject.asObservable();

  constructor() {
    // Example: Initialize with an array of numbers
    this.numbersSubject.next([1, 2, 3, 4, 5]);
  }

  getEvenNumbers(): Observable<number[]> {
    return this.numbers$.pipe(
      map(numbers => numbers.filter(number => number % 2 === 0))
    );
  }

  getSquaredSum(): Observable<number> {
    return this.numbers$.pipe(
      map(numbers => numbers.reduce((sum, number) => sum + number ** 2, 0))
    );
  }
}



