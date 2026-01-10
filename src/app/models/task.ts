export type TaskStatus = 'todo' | 'doing' | 'completed';

export interface Comment {
  id: string;
  description: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  comments: Comment[];
  status: TaskStatus;
}

export type TaskList = Task[];
