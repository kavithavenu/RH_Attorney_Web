import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
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
import { AttorneyMenuComponent } from './components/attorney-menu/attorney-menu.component';
import { AttorneyProfileComponent } from './components/attorney-profile/attorney-profile.component';
import { ConsultationResultsComponent } from './components/consultation-results/consultation-results.component';
import { ClientssortComponent } from './components/clientssort/clientssort.component';
import { ClientscheduleComponent } from './components/clientschedule/clientschedule.component';
import { OpenclientmatterComponent } from './components/openclientmatter/openclientmatter.component';
import { ClientspopupComponent } from './components/clientspopup/clientspopup.component';


@NgModule({
  declarations: [
    AppComponent,
    MainWrapperComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AttorneyMenuComponent,
    AttorneyProfileComponent,
    ConsultationResultsComponent,
    ClientssortComponent,
    ClientscheduleComponent,
    OpenclientmatterComponent,
    ClientspopupComponent
  ],
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
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
