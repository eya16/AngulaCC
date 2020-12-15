import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { AddUserComponent } from './add-user/add-user.component';
const ROUTES:Routes=[
  {path:'',redirectTo:"/login",pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'addUser',component:AddUserComponent},
  {path:'tasks/:userId',canActivate: [AuthGuardService],component:MainComponent},
  {path:'tasks/:userId/add',canActivate: [AuthGuardService],component:AddComponent},
  {path:'tasks/:userId/edit/:id',canActivate: [AuthGuardService],component:AddComponent},
  {path:'**',component:PageNotFoundComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)

  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
