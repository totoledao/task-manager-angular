import { Injectable, signal } from '@angular/core';
import { TaskList } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class Tasks {
  tasks = signal<TaskList>({
    todo: [],
    doing: [],
    completed: [],
  });
}
