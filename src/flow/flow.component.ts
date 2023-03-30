import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flow',
  imports: [CommonModule],
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css'],
})
export class FlowComponent implements OnInit {
  num: number = 5;
  vec: number[];

  constructor() {}

  ngOnInit() {}

  update() {
    this.vec = [];
    for (let i = 1; i <= this.num; i++) {
      this.vec.push(Math.trunc(100 * Math.random()));
    }
  }

  getNumbers() {
    return this.vec;
  }
}
