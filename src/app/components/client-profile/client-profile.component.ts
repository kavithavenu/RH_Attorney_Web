import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { InvitePeopleComponent } from '../invite-people/invite-people.component';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
isLoading:boolean = false;
isAttendeeWaiting:boolean;
sub: any;
  id: any;
  constructor(private dialog:MatDialog,private router:Router,private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad(){

    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log("id from component : ", this.id);

      var isTrueSet = (this.id.toLowerCase() === 'true');
      
      console.log("str to bool from component : ", isTrueSet);
      this.isAttendeeWaiting = isTrueSet;
      
    })
    
  }

  joinTheMeeting(){
    this.isLoading = true;
    setTimeout(
      ()=>{
      this.router.navigateByUrl('/on-call')
      },5000);
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
