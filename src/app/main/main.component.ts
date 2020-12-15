import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../model/Task';
import { ChercherService } from '../shared/chercher.service';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  tasks:Task[];
  userId:string;
  searchText:string;
  type:string;
  p: number ;
  constructor(private tasksService:TasksService,
    private serviceRoute: ActivatedRoute,
    private chercherService:ChercherService) { }

  ngOnInit(): void {
    this.userId = this.serviceRoute.snapshot.params.userId;
 


    this.tasksService.getAllTasks(this.userId).subscribe(
      (next)=>{this.tasks = next;},
      (error)=>{},
      ()=>{}
    );
    console.log(this.tasks);
    
  }
  deleteTask(id:number){
    this.tasksService.deleteTask(id.toString()).subscribe(
      ()=>this.tasks = this.tasks.filter(task=>task.id!=id)
    );
  }
  search(){
    this.tasks = this.chercherService.getTasks(this.tasks,this.type,this.searchText);
  }
  reset(){
    this.tasksService.getAllTasks(this.userId).subscribe(
      (next)=>{this.tasks = next;},
      (error)=>{},
      ()=>{}
    );
  }
}
