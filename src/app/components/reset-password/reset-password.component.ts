import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm:FormGroup;
  @ViewChild('content',{static: true}) successModal:ElementRef;

  constructor(private fb:FormBuilder, private router:Router,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
  
      password:["",Validators.required]
    })
  }

  register(){
    this.router.navigateByUrl('/register')
  }

  openMsgPopup() {
    let closeResult = ""
    this.modalService.open(this.successModal, {ariaLabelledBy: 'modal-basic-title',centered: true,}).result.then((result) => {
      closeResult = `Closed with: ${result}`;
    }, (reason) => {
      closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  toLoginPage(){
    this.modalService.dismissAll()
    this.router.navigateByUrl('/login');
    
  }


}
