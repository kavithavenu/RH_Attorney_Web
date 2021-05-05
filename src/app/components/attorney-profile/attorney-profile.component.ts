import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    constructor(private modalService: NgbModal,private fb: FormBuilder,) { }

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
      typedMessage:""
    })
  }

  sendMessage(){
    console.log(this.sendMessageForm.value)
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

}
