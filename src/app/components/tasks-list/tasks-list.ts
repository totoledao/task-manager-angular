import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Tasks } from '../../services/tasks';

@Component({
  selector: 'app-tasks-list',
  imports: [NgTemplateOutlet],
  templateUrl: './tasks-list.html',
  styles: ``,
})
export class TasksList {
  tasksService = inject(Tasks);
  tasks = this.tasksService.tasks;
}
