import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttorneyMenuComponent } from './components/attorney-menu/attorney-menu.component';
import { AttorneyProfileComponent } from './components/attorney-profile/attorney-profile.component';
import { ClientscheduleComponent } from './components/clientschedule/clientschedule.component';
import { ClientspopupComponent } from './components/clientspopup/clientspopup.component';
import { ClientssortComponent } from './components/clientssort/clientssort.component';
import { ConsultationResultsComponent } from './components/consultation-results/consultation-results.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { OpenclientmatterComponent } from './components/openclientmatter/openclientmatter.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {path:"main",component:MainWrapperComponent},
  {path:"login",component:LoginComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"resetPassword",component:ResetPasswordComponent},
  {path:"clientsort",component:ClientssortComponent},
  {path:"clientschedule",component:ClientscheduleComponent},
  {path:"openclientmatter",component:OpenclientmatterComponent},
  {path:"clientspopoup",component:ClientspopupComponent},
  {path:"consultationresults",component:ConsultationResultsComponent},
  {path:"attorneymenu",component:AttorneyMenuComponent,children:[
    {path:"profile",component:AttorneyProfileComponent},
    // {path:"usernotifications",component:UserNotificationsComponent},
    // {path:"termsofuse",component:TermsOfUseComponent},
    // {path:"privacypolicy",component:PrivacyPolicyComponent},
    // {path:"contactus",component:ContactUsComponent},
    // {path:"techsupport",component:TechSupportComponent},
    {path:"",redirectTo:"profile",pathMatch:"full"}]
  },
  {path:"**",redirectTo:"main",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
