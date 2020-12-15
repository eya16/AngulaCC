import { Injectable } from '@angular/core';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class ChercherService {

  constructor() { }
  getTasks(List:Task[], criteria:string, value:any){
    let taskList=[];
    for (let i in List){
      if(List[i][criteria] === value){
        taskList.push(List[i]);
      }
    }
    return taskList;
  }
}
