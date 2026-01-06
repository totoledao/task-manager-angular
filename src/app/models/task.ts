export type TaskStatus = 'todo' | 'doing' | 'completed';

export interface Task {
  title: string;
  description: string;
}

export type TaskList = Record<TaskStatus, Task[]>;
