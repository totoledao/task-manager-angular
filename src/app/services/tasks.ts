import { computed, Injectable, signal } from '@angular/core';
import { Task, TaskList, TaskStatus } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class Tasks {
  private taskList = signal<TaskList>([]);

  // Get all tasks
  readonly tasks = this.taskList.asReadonly();

  readonly todoTasks = computed(() => this.taskList().filter((t) => t.status === 'todo'));
  readonly doingTasks = computed(() => this.taskList().filter((t) => t.status === 'doing'));
  readonly completedTasks = computed(() => this.taskList().filter((t) => t.status === 'completed'));

  // Get tasks by status
  getTasksByStatus(status: TaskStatus) {
    return computed(() => this.taskList().filter((t) => t.status === status));
  }

  // Update all tasks
  updateTasks(tasks: TaskList) {
    this.taskList.update(() => tasks);
  }

  // Update one task
  updateTask(updatedTask: Task) {
    this.taskList.update((tasks) => tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  }

  // Create task
  addTask(task: Omit<Task, 'id' | 'status' | 'comments'>) {
    this.taskList.update((taskList) => [
      ...taskList,
      { ...task, status: 'todo', id: crypto.randomUUID(), comments: [] },
    ]);
  }

  // Delete task
  deleteTask(task: Task) {
    this.taskList.update((taskList) => taskList.filter((t) => t !== task));
  }
}
