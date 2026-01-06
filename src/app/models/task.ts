export type TaskStatus = 'todo' | 'doing' | 'completed';

export interface Task {
  tile: string;
  description: string;
}

export type TaskList = Record<TaskStatus, Task[]>;
