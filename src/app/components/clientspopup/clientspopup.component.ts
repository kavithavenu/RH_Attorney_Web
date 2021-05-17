import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-clientspopup',
  templateUrl: './clientspopup.component.html',
  styleUrls: ['./clientspopup.component.css']
})
export class ClientspopupComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ClientspopupComponent>) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.dialogRef.close();
  }

  

}
