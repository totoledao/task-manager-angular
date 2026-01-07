export type TaskStatus = 'todo' | 'doing' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
}

export type TaskList = Record<TaskStatus, Task[]>;
