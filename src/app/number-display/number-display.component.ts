import { Component, OnInit } from '@angular/core';
import { NumberService } from './number.service';

@Component({
  selector: 'app-number-display',
  templateUrl: './number-display.component.html',
  styleUrls: ['./number-display.component.scss']
})
export class NumberDisplayComponent implements OnInit {
  numbers: number[] = [];
  evenNumbers: number[] = [];
  squaredSum!: number;

  constructor(private numberService: NumberService) {}
  ngOnInit() {
    this.numberService.numbers$.subscribe(numbers => {
      this.numbers = numbers;
    });

    this.numberService.getEvenNumbers().subscribe(evenNumbers => {
      this.evenNumbers = evenNumbers;
    });

    this.numberService.getSquaredSum().subscribe(squaredSum => {
      this.squaredSum = squaredSum;
    });
  }
}

