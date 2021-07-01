import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfterCallComponent } from './components/after-call/after-call.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { FetchMeetingsComponent } from './components/fetch-meetings/fetch-meetings.component';
import { AttorneyMenuComponent } from './components/attorney-menu/attorney-menu.component';
import { AttorneyProfileComponent } from './components/attorney-profile/attorney-profile.component';
import { ClientscheduleComponent } from './components/clientschedule/clientschedule.component';
import { ClientspopupComponent } from './components/clientspopup/clientspopup.component';
import { ClientssortComponent } from './components/clientssort/clientssort.component';
import { ConsultationResultsComponent } from './components/consultation-results/consultation-results.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { OpenclientmatterComponent } from './components/openclientmatter/openclientmatter.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TechSupportComponent } from './components/tech-support/tech-support.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { ConsultationResultComponent } from './components/consultation-result/consultation-result.component';
import { JoinTheCallComponent } from './components/join-the-call/join-the-call.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { VideoCallComponent } from './components/video-call/video-call.component';

const routes: Routes = [
  {path:"main",component:MainWrapperComponent},
  {path:"login",component:LoginComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"resetPassword",component:ResetPasswordComponent},
  {path:"clientspopoup",component:ClientspopupComponent},
  {path:"updatepassword",component:UpdatePasswordComponent},
  {path:"on-call",component:VideoCallComponent},
  {path:"after-call",component:AfterCallComponent},
  {path:"home",component:HomeComponent,children:[
    {path:"consultationresults",component:ConsultationResultsComponent},
    {path:"fetch-meetings",component:FetchMeetingsComponent},
    {path:"client-profile/:id",component:ClientProfileComponent},
    {path:"consultation-result/:id",component:ConsultationResultComponent},
    {path:"**",redirectTo:"fetch-meetings",pathMatch:"full"}
  ]},
  {path:"clients",component:ClientsComponent,children:[
    {path:"clientsort",component:ClientssortComponent},
    {path:"openclientmatter",component:OpenclientmatterComponent},
    {path:"clientschedule",component:ClientscheduleComponent},
    {path:"schedule",component:ScheduleComponent},
    {path:"**",redirectTo:"clientsort",pathMatch:"full"}
  ]},
  {path:"attorneymenu",component:AttorneyMenuComponent,children:[
    {path:"profile",component:AttorneyProfileComponent},
    {path:"notifications",component:NotificationsComponent},
    {path:"termsofuse",component:TermsOfUseComponent},
    {path:"privacypolicy",component:PrivacyPolicyComponent},
    {path:"techsupport",component:TechSupportComponent},
    {path:"",redirectTo:"profile",pathMatch:"full"}]
  },
  {path:"jointhecall",component:JoinTheCallComponent},
  {path:"**",redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
