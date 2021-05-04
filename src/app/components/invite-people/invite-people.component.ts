import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientProfileComponent } from '../client-profile/client-profile.component';

@Component({
  selector: 'app-invite-people',
  templateUrl: './invite-people.component.html',
  styleUrls: ['./invite-people.component.css']
})
export class InvitePeopleComponent implements OnInit {
  detailsForm:FormGroup;
  detailsArray:Array<any> = [];
  constructor(private fb:FormBuilder,private dialogRef: MatDialogRef<ClientProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.detailsForm = this.fb.group({
      name:["",Validators.required],
      email:["",[Validators.required,Validators.email]]
    })
  }
  closeTab(){
    this.dialogRef.close()
  }
  addDetails(){
    if(this.detailsForm.valid){
      this.detailsArray.push(this.detailsForm.value);
      this.detailsForm.reset();
    }
  }
  removeDetails(index){
    console.log(index);
    
    this.detailsArray.splice(index,1);
  }
  submit(){
    this.dialogRef.close(true)
  }
}
