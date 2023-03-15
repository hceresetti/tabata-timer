import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input() name: string;

  counter: number = 0;

  constructor() {}

  ngOnInit() {}

  increment() {
    this.counter++;
  }
}
