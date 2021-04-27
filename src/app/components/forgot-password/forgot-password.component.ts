import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm:FormGroup;

  constructor(private fb:FormBuilder,private router:Router, private dailog:MatDialog) { }

  ngOnInit(): void {
    this.forgotForm=this.fb.group({
      email:["",[Validators.required,Validators.email]],

    })
  }

  register(){
    this.router.navigateByUrl('/register')
  }

  resetPage(){
    this.router.navigateByUrl('/resetPassword')
  }
  submit(){
    // let dailogRef = this.dailog.open(OtpVerficationComponent,{
    //   panelClass: 'col-md-4',
    //   hasBackdrop:true,
    //   disableClose : true
    // });
    // dailogRef.afterClosed().subscribe(val=>{
    //   if(val){
    //     this.resetPage()
    //   }
    // })

    this.resetPage()
  }


}
