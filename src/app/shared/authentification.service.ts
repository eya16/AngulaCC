import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
 loggedIn:boolean;

  constructor() { 
    this.loggedIn = false;
  }
  logIn(){
    this.loggedIn = true;
  }
  logOut(){
    this.loggedIn = false;
  }
  
}
