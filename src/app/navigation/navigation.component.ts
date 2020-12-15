import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthentificationService } from '../shared/authentification.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isAuth:boolean;
  userId:string;

  constructor(private router: Router,
    private authentificationService:AuthentificationService,
    private serviceRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isAuth = this.authentificationService.loggedIn;
    this.userId = this.serviceRoute.snapshot.params.userId;
  }

  logOut(){
    this.authentificationService.logOut();
    this.router.navigate(['login']);
  }


}
