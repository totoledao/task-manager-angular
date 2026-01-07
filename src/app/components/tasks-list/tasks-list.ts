import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { Task } from '../../models/task';
import { Tasks } from '../../services/tasks';

@Component({
  selector: 'app-tasks-list',
  imports: [DragDropModule],
  templateUrl: './tasks-list.html',
})
export class TasksList {
  tasksService = inject(Tasks);
  tasks = this.tasksService.tasks;

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      // Reorder within same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Move to different list
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
