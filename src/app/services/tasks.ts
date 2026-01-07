import { Injectable, signal } from '@angular/core';
import { Task, TaskList, TaskStatus } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class Tasks {
  tasks = signal<TaskList>({
    todo: [],
    doing: [],
    completed: [],
  });

  // Get all tasks
  getTasks(): TaskList {
    return this.tasks();
  }

  // Create task
  addTask(task: Omit<Task, 'id'>) {
    this.tasks.update((taskList) => ({
      ...taskList,
      todo: [...taskList.todo, { ...task, id: crypto.randomUUID() }],
    }));
  }

  // Update status
  moveTask(task: Task, fromStatus: TaskStatus, toStatus: TaskStatus) {
    this.tasks.update((taskList) => ({
      ...taskList,
      [fromStatus]: taskList[fromStatus].filter((t) => t !== task),
      [toStatus]: [...taskList[toStatus], task],
    }));
  }

  // Delete task
  deleteTask(task: Task) {
    this.tasks.update((taskList) => ({
      todo: taskList.todo.filter((t) => t !== task),
      doing: taskList.doing.filter((t) => t !== task),
      completed: taskList.completed.filter((t) => t !== task),
    }));
  }
}
