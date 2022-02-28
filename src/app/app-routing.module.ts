import { RouteGuardBasicService } from './service/route-guard-basic.service';
import { AssignmentComponent } from './assignment/assignment.component';
import { CourseComponent } from './course/course.component';
import { ErrorComponent } from './error/error.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardLogoutService } from './service/route-guard-logout.service';
import { ViewAssignmentComponent } from './view-assignment/view-assignment.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"welcome",component:WelcomeComponent,canActivate:[RouteGuardBasicService]},
  {path:"logout",component:LogoutComponent,canActivate:[RouteGuardLogoutService]},
  {path:"courses/:username",component:CourseComponent,canActivate:[RouteGuardService]},
  {path:"assignments/:username",component:AssignmentComponent,canActivate:[RouteGuardService]},
  {path:"view/assignment/:username/:id",component:ViewAssignmentComponent,canActivate:[RouteGuardService]},
  {path:"**",component:ErrorComponent}
];
// 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
