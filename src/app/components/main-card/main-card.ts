import { Component, inject } from '@angular/core';
import { Tasks } from '../../services/tasks';
import { MainButton } from '../main-button/main-button';

@Component({
  selector: 'app-main-card',
  imports: [MainButton],
  templateUrl: './main-card.html',
  styles: ``,
})
export class MainCard {
  tasksService = inject(Tasks);

  createTask() {
    this.tasksService.addTask({
      title: 'test',
      description: 'test',
    });
  }
}
