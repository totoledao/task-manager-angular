import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Task, TaskStatus } from '../../models/task';
import { Tasks } from '../../services/tasks';

@Component({
  selector: 'app-tasks-list',
  imports: [DragDropModule, NgTemplateOutlet],
  templateUrl: './tasks-list.html',
})
export class TasksList {
  tasksService = inject(Tasks);
  tasks = this.tasksService.tasks;
  todoTasks = this.tasksService.todoTasks;
  doingTasks = this.tasksService.doingTasks;
  completedTasks = this.tasksService.completedTasks;

  drop(event: CdkDragDrop<Task[]>, newStatus: TaskStatus) {
    const newArr = [...this.tasks()];

    // Reorder list index
    moveItemInArray(newArr, event.previousIndex, event.currentIndex);

    // Move to different list
    if (event.previousContainer !== event.container) {
      const movedTask = event.previousContainer.data[event.previousIndex];
      for (let task of newArr) {
        if (task.id === movedTask.id) {
          task.status = newStatus;
        }
      }
    }

    // Update Tasks Service
    this.tasksService.updateTasks(newArr);
  }
}
