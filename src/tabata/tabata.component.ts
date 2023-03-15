import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabata',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabata.component.html',
  styleUrls: ['./tabata.component.css'],
})
export class TabataComponent implements OnInit {
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
