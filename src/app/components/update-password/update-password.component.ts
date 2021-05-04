import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  updatePasswordForm:FormGroup;
  hide:boolean = true;
  closeResult: string;
  @ViewChild('openSuccessModelContent', { static: true }) openSuccessResponse: ElementRef<any>;
  constructor(private fb:FormBuilder, private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    
    //Change Pwd
  this.updatePasswordForm = this.fb.group({
    //"userID": this.signObj.hospitalAdmin.userID,
    "oldpassword": ['', [Validators.required, Validators.minLength(8)]],
    "newpassword": ['', [Validators.required, Validators.minLength(8)]],
    "confirmpassword": ['', Validators.required],
  }
    , {
      validators: this.passwordConfirming
    }
  )
  }
  
  passwordConfirming(c: AbstractControl) { //: { invalid: boolean }
    if (c.get('newpassword').value !== c.get('confirmpassword').value) {
      c.get('confirmpassword').setErrors({ NoPassswordMatch: true });
      //return { invalid: true };
    }
  }
  changePasswordMethod(){
    this.modalService.open(this.openSuccessResponse)
    setTimeout(()=>{
      this.modalService.dismissAll()
      this.router.navigateByUrl('/usermenu/profile')
    },1000)
  }

  forgotPage(){
    this.router.navigateByUrl('/forgotPassword')
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

}
