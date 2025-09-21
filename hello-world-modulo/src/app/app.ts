import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { texto } from './modulo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = texto;
}
