import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
})
export class InterestsComponent implements OnInit {
  Vp: number = 100;
  j: number = 0.1;
  n: number = 5;

  getJuros() {
    return this.Vp * (1 + this.j * this.n);
  }

  constructor() {}

  ngOnInit() {}
}
