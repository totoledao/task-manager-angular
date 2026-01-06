import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../app/components/header/header';
import { MainCard } from './components/main-card/main-card';
import { TasksList } from './components/tasks-list/tasks-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MainCard, TasksList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('task-manager');
}
