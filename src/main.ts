import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
import { TabataComponent } from './tabata/tabata.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, FormsModule, TimerComponent, TabataComponent],
  template: `
    <h1>{{name}}!</h1>
    <app-default></app-default>
    <br>
    <app-tabata></app-tabata>
  `,
})
export class App {
  name = 'Tabata';

  constructor() {
    let title = 'A Simple Tabata Timer';
    document.getElementById('app').innerHTML = title;

    let action = '-';
    let round = 0;
    let second = 5;
    let intervalId = setInterval(() => {
      if (round < 1) action = 'READY?';
      else if (round > 8) action = 'YOU GOT IT!';
      else if (second > 10) action = 'DO IT!';
      else action = 'RELAX!';

      document.getElementById('app-action').innerHTML = action;

      if (round >= 1 && round <= 8) {
        document.getElementById('app-round').innerHTML = round.toString();
      } else {
        document.getElementById('app-round').innerHTML = '-';
      }

      if (round <= 8) {
        document.getElementById('app-time').innerHTML = second.toString() + 's';
      } else {
        document.getElementById('app-time').innerHTML = '-';
      }
      second -= 1;
      if (second == 0) {
        round += 1;
        second = 30;
      }
    }, 1000);
  }
}
