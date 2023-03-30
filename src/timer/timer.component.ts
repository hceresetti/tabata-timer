import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  template: `Tabata Timer`,
})
export class TimerComponent implements OnInit {
  @Input() name: string;

  counter: number = 0;

  constructor() {}

  ngOnInit() {}

  increment() {
    this.counter++;
  }
}
