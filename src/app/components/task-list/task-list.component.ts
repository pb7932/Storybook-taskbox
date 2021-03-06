import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasksInOrder: Task[] = [];
  /** The list of tasks */
  @Input()
 set tasks(arr: Task[]) {
   this.tasksInOrder = [
     ...arr.filter(t => t.state === 'TASK_PINNED'),
     ...arr.filter(t => t.state !== 'TASK_PINNED'),
   ];
 }

  /** Checks if it's in loading state */
  @Input() loading = false;

  /** Event to change the task to pinned */
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  /** Event to change the task to archived */
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();
}
