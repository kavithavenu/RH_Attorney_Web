import { Component, OnInit , ElementRef ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AttorneyServiceService } from 'src/app/services/attorney-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm:FormGroup;
  params:any;
  email:string = "";
  @ViewChild('content',{static: true}) successModal:ElementRef;

  constructor(private fb:FormBuilder, private router:Router,private modalService:NgbModal, 
    private activatedRouter:ActivatedRoute, private loginService:LoginService,private attoneyService:AttorneyServiceService,
    private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      emailID:[""],
      password:["",[Validators.required,Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%])(?=\\S+$).{8,13})")]]
    })
   this.onLoad();
  }
onLoad(){
  this.activatedRouter.queryParamMap.subscribe(params=>{
    this.params = {...params}
  })
  if(this.params && this.params.params.id){
    this.resetForm.get('emailID').setValue(atob(this.params.params.id))
  }
}
  register(){
    this.router.navigateByUrl('/register');
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
    this.router.navigateByUrl('/login');
    
  }
    //message alerts showing
    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
         duration: 3000,
         verticalPosition: 'bottom'
      });
    }
  submit(){
    if(!this.resetForm.valid){
      this.openSnackBar("Provide required data to resetpassword","");
      return;
    }
    this.attoneyService.showLoader.next(true);
    this.loginService.resetPass(this.resetForm.value).subscribe((posRes)=>{
      console.log("reset pwd res...",posRes);
    this.attoneyService.showLoader.next(false);
    this.openSnackBar(posRes.message,"");
    if(posRes.response == 3){
      this.openMsgPopup();
      setTimeout(()=>{
        this.modalService.dismissAll();
        this.router.navigateByUrl('/login')
      },2000)
    }
    },(err:HttpErrorResponse)=>{
      this.attoneyService.showLoader.next(false);
      this.openSnackBar(err.message,"");
      if(err.error instanceof Error){
        console.warn("Client Slide Error",err.message);
      }else{
        console.warn("Server Slide Error",err.message);
      }
    })
  }
}
