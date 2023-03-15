import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
})
export class MeComponent implements OnInit {
  myName: string;

  constructor() {
    this.myName = 'Jason';
  }

  ngOnInit() {}
}
