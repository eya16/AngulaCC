import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../model/Task';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  fileName:string;
  id:number;
  task:Task;
  userId:string;

  constructor(private router: Router,
    private serviceRoute: ActivatedRoute,
    private taskservice:TasksService) { }

  ngOnInit(): void {
    this.userId = this.serviceRoute.snapshot.params.userId;
    this.task = new Task();
    this.task.importance = 50;
    this.id = this.serviceRoute.snapshot.params.id;
    if(this.id){
      this.taskservice.getSingleTask(this.id.toString()).subscribe(
        (next:Task)=>{this.task = next;}
      );
    }
  }

  

  addTask() {
    if(this.id){
      if(this.fileName){
        this.task.image = this.fileName;
      }
      this.taskservice.putTask(this.task,this.id.toString()).subscribe(
        ()=>this.router.navigate(['tasks',this.userId] ),
      );
    }else{
            if(this.fileName){
            this.task.image = this.fileName;
          }
            else{
              //use a default image for task
              this.task.image = "default.png";
            }
    this.task.userId = +this.userId;        
    this.taskservice.addTask(this.task).subscribe(
      ()=>{},
      (error)=>{console.log("error : ",error.error)},
      ()=>{this.router.navigate(['tasks',this.userId] );}
    );  
    console.log("added task : ",this.task);
   
  }

  
  }








  //listen to the event of choose file and get the file's name
  onFileSelected(event){
    this.fileName = event.target.files[0].name;
  }

}
