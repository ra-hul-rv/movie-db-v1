import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'login',component :LoginComponent},
  {path:'register',component :SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
