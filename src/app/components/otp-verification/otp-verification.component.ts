import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttorneyServiceService } from 'src/app/services/attorney-service.service';
import { LoginService } from 'src/app/services/login.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {

  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: true,
    placeholder: ''
  };
  showAlert:boolean = false;
  otpLength:number = 0;
  alertMsg:string = "";
  alertType:string = "danger"
  otp:number = 0;
  isError:boolean = false;
  constructor(private modalService:NgbModal,private dialogRef:MatDialogRef<ScheduleComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any, private loginService:LoginService, 
     private attorneyService:AttorneyServiceService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    
  }
  onOtpChange(event){
    this.otp = event;
    this.otpLength = event.length;
  if(event.length == 4){
    this.isError = false;
  }
  }
  closeModal(){
    this.dialogRef.close();
  }
resend(){
  this.attorneyService.showLoader.next(true);
  let obj = {emailID:this.data}
  this.loginService.resendOtp(obj).subscribe((posRes)=>{
    this.attorneyService.showLoader.next(false);
    if(posRes.response == 3){
      this.alertType = "success";
      this.alertMsg = posRes.message;
      this.showAlert = true;
    }else{
      this.alertType = "danger";
      this.alertMsg = posRes.message;
      this.showAlert = true;
    }
  },(err:HttpErrorResponse)=>{
    this.attorneyService.showLoader.next(false);
    if(err.error instanceof Error){
      console.warn("Client Slide Error",err.message);
    }else{
      console.warn("Server Slide Error",err.message);
    }
  })
}
  verify(){
    if(this.otpLength == 4){
      let obj = {
        emailID: this.data,
        otp: this.otp
      }
      this.attorneyService.showLoader.next(true);
      
      this.loginService.verifyOTP(obj).subscribe((posRes)=>{
        
        this.attorneyService.showLoader.next(false);
        // this.openSnackBar(posRes.message,"")
        if(posRes.response == 3){
          this.openSnackBar(posRes.message,"");
          this.dialogRef.close(posRes)
        }else{
          this.openSnackBar(posRes.message,"");
          this.alertType = "danger";
          this.alertMsg = posRes.message;
          this.showAlert = true;
        }
      },(err:HttpErrorResponse)=>{
        this.openSnackBar(err.message,"");
        this.attorneyService.showLoader.next(false);
        this.alertType = "danger";
        this.alertMsg = err.message;
        this.showAlert = true;
        if(err.error instanceof Error){
          console.warn("Client Slide Error",err.message);
        }else{
          console.warn("Server Slide Error",err.message);
        }
      })
    }else{
      this.isError = true;
    }
  }

   //message alerts showing
   openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 3000,
       verticalPosition: 'bottom'
    });
  }
  
}
