import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttorneyServiceService } from 'src/app/services/attorney-service.service';

@Component({
  selector: 'app-attorney-menu',
  templateUrl: './attorney-menu.component.html',
  styleUrls: ['./attorney-menu.component.css']
})
export class AttorneyMenuComponent implements OnInit {

  isLoggedIn:boolean = false;
  custInfo:any;
  closeResult: string;
  constructor(private modalService: NgbModal,
    private attorneyService:AttorneyServiceService,
    private router:Router
    ) {
    this.attorneyService.isLoggedIn.subscribe(val=>{
      this.isLoggedIn = val;
    })
   }

  ngOnInit(): void {
    this.custInfo = JSON.parse(localStorage.getItem('attorneyInfo'));
    if(this.custInfo && this.custInfo.profilePic){
      this.isLoggedIn = true;
    }
  }
  
  signOut(){
    this.modalService.dismissAll();
    localStorage.clear();
    this.attorneyService.isLoggedIn.next(false);
    this.router.navigateByUrl('/main')
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
