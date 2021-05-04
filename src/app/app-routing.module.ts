import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfterCallComponent } from './components/after-call/after-call.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { FetchMeetingsComponent } from './components/fetch-meetings/fetch-meetings.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';

const routes: Routes = [
  {path:"main",component:MainWrapperComponent},
  {path:"login",component:LoginComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"resetPassword",component:ResetPasswordComponent},
  {path:"updatepassword",component:UpdatePasswordComponent},
  {path:"after-call",component:AfterCallComponent},
  {path:"home",component:HomeComponent,children:[
    {path:"fetch-meetings",component:FetchMeetingsComponent},
    {path:"client-profile",component:ClientProfileComponent},
    {path:"**",redirectTo:"fetch-meetings",pathMatch:"full"}
  ]},
  {path:"**",redirectTo:"main",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
