import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvitePeopleComponent } from '../invite-people/invite-people.component';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
isLoading:boolean = false;
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  shareLink(){
let dialogRef = this.dialog.open(InvitePeopleComponent,{
  panelClass:'col-md-4',
  hasBackdrop:true,
  disableClose:true,
});
dialogRef.afterClosed().subscribe(val=>{
  if(val){
    this.isLoading = true;
  }
})
  }
}
