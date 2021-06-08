import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { AttorneyMenuComponent } from './components/attorney-menu/attorney-menu.component';
import { AttorneyProfileComponent } from './components/attorney-profile/attorney-profile.component';
import { ConsultationResultsComponent } from './components/consultation-results/consultation-results.component';
import { ClientssortComponent } from './components/clientssort/clientssort.component';
import { ClientscheduleComponent } from './components/clientschedule/clientschedule.component';
import { OpenclientmatterComponent } from './components/openclientmatter/openclientmatter.component';
import { ClientspopupComponent } from './components/clientspopup/clientspopup.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TechSupportComponent } from './components/tech-support/tech-support.component';

// Social media login
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
// Npm Packages
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgOtpInputModule } from  'ng-otp-input';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { HomeComponent } from './components/home/home.component';
import { FetchMeetingsComponent } from './components/fetch-meetings/fetch-meetings.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { InvitePeopleComponent } from './components/invite-people/invite-people.component';
import { AfterCallComponent } from './components/after-call/after-call.component';
import { ConsultationResultComponent } from './components/consultation-result/consultation-result.component';
import { JoinTheCallComponent } from './components/join-the-call/join-the-call.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
@NgModule({
  declarations: [
    AppComponent,
    MainWrapperComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UpdatePasswordComponent,
    OtpVerificationComponent,
    HomeComponent,
    FetchMeetingsComponent,
    ClientProfileComponent,
    InvitePeopleComponent,
    AfterCallComponent,
    AttorneyMenuComponent,
    AttorneyProfileComponent,
    ConsultationResultsComponent,
    ClientssortComponent,
    ClientscheduleComponent,
    OpenclientmatterComponent,
    ClientspopupComponent,
    ConsultationResultComponent,
    NotificationsComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    TechSupportComponent,
    JoinTheCallComponent,
    ClientsComponent,
    ScheduleComponent
  ],
    entryComponents:[InvitePeopleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    NgbModule,
    NgOtpInputModule,
    BsDatepickerModule.forRoot(),
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '340242889123-4l9aae2ojho3o3fh5uerdf97vo3qki2s.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
