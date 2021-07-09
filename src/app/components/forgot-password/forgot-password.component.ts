import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AttorneyServiceService } from 'src/app/services/attorney-service.service';
import { LoginService } from 'src/app/services/login.service';
import { OtpVerificationComponent } from '../otp-verification/otp-verification.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm:FormGroup;

  constructor(private fb:FormBuilder,private router:Router, private dailog:MatDialog,
     private attorneyService:AttorneyServiceService, private loginService:LoginService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.forgotForm=this.fb.group({
      emailID:["",[Validators.required,Validators.email]],

    })
  }

  resetPage(){
    this.router.navigateByUrl('/resetPassword')
  }
   //message alerts showing
   openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 3000,
       verticalPosition: 'bottom'
    });
  }
  submit(){
    if(!this.forgotForm.valid){
      
      this.openSnackBar("Provide an Email to complete this.","");
      return;
    }
    this.attorneyService.showLoader.next(true);
    this.loginService.forgotPass(this.forgotForm.value).subscribe((posRes)=>{
      this.attorneyService.showLoader.next(false);
      this.openSnackBar(posRes.message,"");
      if(posRes.response == 3){
        let dailogRef = this.dailog.open(OtpVerificationComponent,{
          panelClass: 'col-md-4',
          hasBackdrop:true,
          disableClose : true,
          data: this.forgotForm.value.emailID
        });
        dailogRef.afterClosed().subscribe(val=>{
          this.openSnackBar(val.message,"");
          let email = btoa(this.forgotForm.value.emailID)
          this.router.navigate(['/resetPassword'],{queryParams:{id:email}})
        })
      }else{
        this.attorneyService.showLoader.next(false);
      }
    },(err:HttpErrorResponse)=>{
      this.attorneyService.showLoader.next(false);
      this.openSnackBar(err.message,"");
      if(err.error instanceof Error){
        console.warn("Client Slide Error",err.message);
      }else{
        console.warn("Server Slide Error",err.message);
      }
    })

  }
verifyOtp(obj){
  this.attorneyService.showLoader.next(true);
  this.loginService.verifyOTP(obj).subscribe((posRes)=>{
    this.attorneyService.showLoader.next(false);
    
    if(posRes.response == 3){
      this.openSnackBar(posRes.message,"");
    }
    else{
      this.openSnackBar(posRes.message,"");
    }
  },(err:HttpErrorResponse)=>{
    this.attorneyService.showLoader.next(false);
    this.openSnackBar(err.message,"")
    if(err.error instanceof Error){
      console.warn("Client Slide Error",err.message);
    }else{
      console.warn("Server Slide Error",err.message);
    }
  })
}
}
