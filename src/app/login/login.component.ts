import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthentificationService } from '../shared/authentification.service';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm:FormGroup;
users:User[];
userId:number;
  constructor(private userservice:UsersService,
    private router: Router,
    private authentificationService:AuthentificationService) { }
  authentifier:boolean;
  clicked:boolean;
  ngOnInit(): void {
    this.authentifier = false;
    this.clicked = false;
    this.userservice.getAllUsers().subscribe(
      (next)=>{this.users = next;}
    );
    this.registerForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password : new FormControl('', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    });
  }
login(){
  this.clicked = true;
  console.log(this.users);
  this.users.forEach(user => {
    if(user.email == this.email.value && user.password == this.password.value){
      this.authentifier = true;
      this.userId = user.id;
    }
  });
  if(this.authentifier == true){
    this.authentificationService.logIn();
    //this.router.navigate(['tasks']);
    this.router.navigate(['tasks',this.userId]);

  }

  console.log((this.email.value));
  console.log((this.password.value));



}

get password(){
  return this.registerForm.get('password');
}
get email(){
  return this.registerForm.get('email');
}


}
