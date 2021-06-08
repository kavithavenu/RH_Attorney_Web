import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { setTime } from 'ngx-bootstrap/chronos/utils/date-setters';
import { AttorneyServiceService } from 'src/app/services/attorney-service.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  updatePasswordForm:FormGroup;
  hide:boolean = true;
  hide1:boolean = true;
  hide2:boolean = true;
  closeResult: string;
  custInfo:any;
  @ViewChild('openSuccessModelContent', { static: true }) openSuccessResponse: ElementRef<any>;
  constructor(private fb:FormBuilder, private router:Router,private modalService: NgbModal,private loginService:LoginService,
    private snackBar:MatSnackBar,private attorneyService:AttorneyServiceService) { }

  ngOnInit(): void {
    var AttorneySignInData = JSON.parse(localStorage.getItem("attorneyInfo"));
    console.log("Attorney signed-in data...", AttorneySignInData.emailID);
    //Change Pwd
  this.updatePasswordForm = this.fb.group({
    "emailID":[""],
    "oldPassword": ['', [Validators.required, Validators.minLength(8)]],
    "newPassword": ['', [Validators.required, Validators.minLength(8)]],
    "confirmpassword": ['', Validators.required],
  }
    , {
      validators: this.passwordConfirming
    }
  );
    this.onLoad();
  }
  onLoad(){
      this.custInfo = JSON.parse(localStorage.getItem('attorneyInfo'));
      console.log(this.custInfo);
      if(this.custInfo && this.custInfo.emailID){
      this.updatePasswordForm.get('emailID').setValue(this.custInfo.emailID)
  }

  }
  passwordConfirming(c: AbstractControl) { //: { invalid: boolean }
    if (c.get('newPassword').value !== c.get('confirmpassword').value) {
      c.get('confirmpassword').setErrors({ NoPassswordMatch: true });
      //return { invalid: true };
    }
  }

  changePasswordMethod(){
    this.modalService.open(this.openSuccessResponse)
    setTimeout(()=>{
      this.modalService.dismissAll()
      this.router.navigateByUrl('/attorneymenu/profile')
    },1000)
  }

  forgotPage(){
    this.router.navigateByUrl('/forgotPassword')
  }
  gotoProfile(){
    this.modalService.dismissAll();
    this.router.navigateByUrl('/attorneymenu/profile');
  }
  openVerifyEmailMethod(openSuccessModelContent){
    this.modalService.open(openSuccessModelContent, { ariaLabelledBy: 'modal-basic-title', size: 'sm', 
    backdrop: "static" }).result.then((result) => {
      //,centered: true
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  //message alerts showing
 openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
     duration: 3000,
     verticalPosition: 'bottom'
  });
}
  submit(){
    if(!this.updatePasswordForm.valid){
      return;
    }
    this.attorneyService.showLoader.next(true);
    let payLoad = {...this.updatePasswordForm.value};
    delete payLoad.confirmpassword
    this.loginService.changePassword(payLoad).subscribe((posRes)=>{
      this.attorneyService.showLoader.next(false);
      this.openSnackBar(posRes.message,"")
      if(posRes.response == 3){
        this.modalService.open(this.openSuccessResponse)
        //setTimeout(()=>{
          //this.modalService.dismissAll()
          this.router.navigateByUrl('/attorneymenu/profile')
        //},1000)
        //this.openVerifyEmailMethod(this.openSuccessResponse)
      }
      else{
        this.openSnackBar(posRes.message,"");
      }
    },(err:HttpErrorResponse)=>{
      this.attorneyService.showLoader.next(false);
      this.openSnackBar(err.message,"");
      if(err.error instanceof Error){
        console.warn("Client Error",err.message);
      }else{
        console.warn("Server Error",err.message);
      }
    })
    
  }
}
