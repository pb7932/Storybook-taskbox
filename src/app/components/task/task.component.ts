import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task : Task;
  @Output() onPinTask = new EventEmitter<any>();
  @Output() onArchiveTask = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  /**
  * Component method to trigger the onPin event
  * @param id string
  */
 onPin(id: any) {
     this.onPinTask.emit(id);
   }
   /**
    * Component method to trigger the onArchive event
    * @param id string
    */
   onArchive(id: any) {
     this.onArchiveTask.emit(id);
   }

}
