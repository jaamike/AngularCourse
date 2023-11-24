import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-observable-counter-app',
  templateUrl: './observable-counter-app.component.html',
  styleUrls: ['./observable-counter-app.component.scss']
})
export class ObservableCounterAppComponent {
  counterValue!: number;
  constructor(private counterService: CounterService) {}
  ngOnInit() {
    this.counterService.counter$.subscribe((value) => {
      this.counterValue = value;
    });
  }
  increment() {
    this.counterService.increment();
  }
  decrement() {
    this.counterService.decrement();
  }
}





