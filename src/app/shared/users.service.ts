import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseURL ="http://localhost:3000/users/";

  constructor(private http: HttpClient) { }



  getAllUsers(){
    return this.http.get<User[]>(this.baseURL);
  }
  
  addUser(user:User){
    return this.http.post(this.baseURL,user);
  }


}
