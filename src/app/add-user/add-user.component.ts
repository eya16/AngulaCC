import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  registerForm:FormGroup;
  user:User;
  constructor(private userservice:UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.registerForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password : new FormControl('', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    });
  }
  add(){
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    this.userservice.addUser(this.user).subscribe(
      (next)=>{},
      (error)=>{},
      ()=>{
        console.log("new User : ",this.user);
        this.router.navigate(['/login']);
      }
    )
    
  }



  get password(){
    return this.registerForm.get('password');
  }
  get email(){
    return this.registerForm.get('email');
  }

}
