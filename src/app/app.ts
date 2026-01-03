import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../app/components/header/header';
import { MainButton } from './components/main-button/main-button';
import { Tasks } from './components/tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Tasks, MainButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('task-manager');
}
