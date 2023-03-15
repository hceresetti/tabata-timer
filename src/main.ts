import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CounterComponent } from './counter/counter.component';
import { TabataComponent } from './tabata/tabata.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, CounterComponent, TabataComponent, FormsModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <hr>
    <my-app></my-app>
    <hr>
    <app-tabata></app-tabata>
  `,
})
export class App {
  name = 'Tabata';
}

bootstrapApplication(App);
