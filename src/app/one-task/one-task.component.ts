import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Task } from '../model/Task';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-one-task',
  templateUrl: './one-task.component.html',
  styleUrls: ['./one-task.component.scss']
})
export class OneTaskComponent implements OnInit {
  @Input() task:Task;
  @Input() id:number;
  @Output() notifdelete = new EventEmitter<number>();

  constructor(private taskservice:TasksService) { }

  ngOnInit(): void {
  }
  deleteTask(){
   this.notifdelete.emit(this.id);
  }
}
