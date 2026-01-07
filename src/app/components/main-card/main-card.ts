import { Component, inject } from '@angular/core';
import { DialogData } from '../../models/dialog';
import { Dialog } from '../../services/dialog';
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
  dialogService = inject(Dialog);

  dialogData: DialogData = {
    title: 'Test title',
    content: 'Test content',
    cancelAction: true,
    actions: [{ title: 'Create task', action: () => this.createTask() }],
  };

  openNewTaskDialog() {
    this.dialogService.open(this.dialogData);
  }

  createTask() {
    this.tasksService.addTask({
      title: 'test',
      description: 'test',
    });
  }
}
