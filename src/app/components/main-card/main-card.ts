import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Dialog } from '../../services/dialog';
import { Tasks } from '../../services/tasks';
import { MainButton } from '../main-button/main-button';

@Component({
  selector: 'app-main-card',
  imports: [MainButton, FormsModule],
  templateUrl: './main-card.html',
})
export class MainCard {
  tasksService = inject(Tasks);
  dialogService = inject(Dialog);

  // Form create task
  @ViewChild('taskForm') taskFormTemplate!: TemplateRef<any>;
  taskTitle = '';
  taskDescription = '';

  openNewTaskDialog() {
    this.dialogService.open({
      title: 'Create New Task',
      content: this.taskFormTemplate,
      cancelAction: true,
      actions: [
        {
          title: 'Create Task',
          action: () => this.createTask(),
        },
      ],
    });
  }

  createTask() {
    this.tasksService.addTask({
      title: this.taskTitle,
      description: this.taskDescription,
    });
    this.taskTitle = '';
    this.taskDescription = '';
  }
}
