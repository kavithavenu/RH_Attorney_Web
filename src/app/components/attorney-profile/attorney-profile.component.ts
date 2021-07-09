import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttorneyServiceService } from 'src/app/services/attorney-service.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-attorney-profile',
  templateUrl: './attorney-profile.component.html',
  styleUrls: ['./attorney-profile.component.css']
})
export class AttorneyProfileComponent implements OnInit {
  sendMessageForm:FormGroup;
  public ratings:Array<any> = [];
  educationDetails:any = [{"education":"Juris Doctor, University of Denver Sturm College of  Law"},
    {"education":"Bachelor of Science, Oklahoma State of University"},
    {"education":"Bar Admissions: Colorado Bar, 2013; U.S District Court - Colorado; U.S. Court of Appeals - 10th Circcuit"}]
    closeResult: string;
    constructor(private modalService: NgbModal,private fb: FormBuilder,
      private loginService:LoginService, private snackBar:MatSnackBar,
      private attorneyService:AttorneyServiceService,private router:Router,) { }

  ngOnInit(): void {
    this.ratings = [
      {rating:4,
        matter:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et",
        time:" Nov 14, 2020"},
        {rating:4,
          matter:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et",
          time:" Nov 14, 2020"},
          {rating:3,
            matter:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et",
            time:" Nov 14, 2020"},
            {rating:4,
              matter:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et",
              time:" Nov 14, 2020"},
              {rating:4,
                matter:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et",
                time:" Nov 14, 2020"},
                {rating:4,
                  matter:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et",
                  time:" Nov 14, 2020"}
    ]

    this.sendMessageForm = this.fb.group({
      typedMessage:["",Validators.required]
    })
  }

  sendMessage(){
    if(!this.sendMessageForm.valid){      
      this.openSnackBar("Please Provide data to complete this.","");
      return;
    }
    console.log(this.sendMessageForm.value)
    this.modalService.dismissAll();
    this.sendMessageForm.reset();
    // if(this.sendMessageForm.valid){
    //   this.loginService.sendMsgToRhTeam(this.sendMessageForm.value).subscribe((posRes)=>{
    //     console.log(posRes)
    //     if(posRes.response == 3){      
    //       console.log("Success",posRes);
    //       this.openSnackBar(posRes.message,"");
    //     }else{
    //       this.openSnackBar(posRes.message,"")
    //     }
    //   },(err:HttpErrorResponse)=>{
    //     this.attorneyService.showLoader.next(false);
    //     this.openSnackBar(err.message,"");
    //     if(err.error instanceof Error){
    //       console.warn("Client Side Error",err.message);
    //     }else{
    //       console.warn("Server Side Error",err.message);
    //     }
    //   })
    // }else{
    //   this.openSnackBar("Provide required data to login","");
    //   this.sendMessageForm.controls['typedMessage'].markAsTouched();
    // }
  }

  openMessageMethod(openMessageModelContent){
    this.modalService.open(openMessageModelContent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', 
    backdrop: "static",centered: true }).result.then((result) => {
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

}
