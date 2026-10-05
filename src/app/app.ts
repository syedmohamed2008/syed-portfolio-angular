import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  Loading
} from './shared/components/loading/loading';

@Component({
  imports: [RouterOutlet, Loading],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('syed-portfolio-angular');
}
