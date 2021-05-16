import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AttorneyServiceService } from 'src/app/services/attorney-service.service';
import { ClientspopupComponent } from '../clientspopup/clientspopup.component';


@Component({
  selector: 'app-openclientmatter',
  templateUrl: './openclientmatter.component.html',
  styleUrls: ['./openclientmatter.component.css']
})
export class OpenclientmatterComponent implements OnInit {

  constructor(private router:Router, private fb:FormBuilder, private dailog:MatDialog, private attoneyService:AttorneyServiceService) { }

  ngOnInit(): void {
  }

  openOtp(){
    let dailogRef = this.dailog.open(ClientspopupComponent,{
      panelClass:'col-md-4',
      disableClose:true,
      hasBackdrop:true
    })
    dailogRef.afterClosed().subscribe(val=>{
      if(val){
  
        this.router.navigateByUrl('/main')
      }
    })
  }

}
