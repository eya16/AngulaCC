import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  baseURL ="http://localhost:3000/tasks";

  constructor(private http: HttpClient) { }

  getAllTasks(userId:string){
    return this.http.get<Task[]>(this.baseURL+"?userId="+userId);
  }

  deleteTask(id:string){
    return this.http.delete(this.baseURL +"/"+ id);
  }

  addTask(t:Task){
    return this.http.post(this.baseURL,t);
  }

  putTask(t:Task,id:string){
    return this.http.put(this.baseURL+"/"+id,t);
  }
  getSingleTask(id:string){
    return this.http.get(this.baseURL+"/"+id);
  }
}
