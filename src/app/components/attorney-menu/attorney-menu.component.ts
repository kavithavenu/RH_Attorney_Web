import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-attorney-menu',
  templateUrl: './attorney-menu.component.html',
  styleUrls: ['./attorney-menu.component.css']
})
export class AttorneyMenuComponent implements OnInit {

  isLoggedIn:boolean = false;
  closeResult: string;
  constructor(private modalService: NgbModal,
    //private attorneyService:AttorneyServiceService
    ) {
    // this.attorneyService.isLoggedIn.subscribe(val=>{
    //   this.isLoggedIn = val;
    // })
   }

  ngOnInit(): void {
  }
  signOut(){
    this.modalService.dismissAll();
//this.attorneyService.isLoggedIn.next(false);
  }
  openSignOutMethod(openSignOutModelContent){
    this.modalService.open(openSignOutModelContent, { ariaLabelledBy: 'modal-basic-title', size: 'sm', 
    backdrop: "static",centered: true }).result.then((result) => {
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
