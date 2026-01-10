import { Injectable, signal } from '@angular/core';
import { Task, TaskList, TaskStatus } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class Tasks {
  tasks = signal<TaskList>([]);

  // Get all tasks
  getTasks(): TaskList {
    return this.tasks();
  }

  // Get tasks by status
  getTasksByStatus(status: TaskStatus): TaskList {
    return this.tasks().filter((t) => t.status === status);
  }

  // Update all tasks
  updateTasks(tasks: TaskList) {
    this.tasks.update(() => tasks);
  }

  // Create task
  addTask(task: Omit<Task, 'id' | 'status' | 'comments'>) {
    this.tasks.update((taskList) => [
      ...taskList,
      { ...task, status: 'todo', id: crypto.randomUUID(), comments: [] },
    ]);
  }

  // Update status
  moveTask(task: Task, toStatus: TaskStatus) {
    this.tasks.update((taskList) =>
      taskList.map((t) => {
        if (t.id === task.id) {
          return { ...t, status: toStatus };
        }
        return t;
      })
    );
  }

  // Delete task
  deleteTask(task: Task) {
    this.tasks.update((taskList) => taskList.filter((t) => t !== task));
  }
}
