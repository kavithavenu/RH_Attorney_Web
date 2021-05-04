import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {

  constructor(private modalService:NgbModal,private dialogRef:MatDialogRef<ForgotPasswordComponent>) { }

  ngOnInit(): void {
  }
  onOtpChange(event){
    console.log(event);
  }
  closeModal(){
    this.dialogRef.close();

  }
  verify(){
    this.dialogRef.close(true)
  }
}
