import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { AttorneyServiceService } from 'src/app/services/attorney-service.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  hide:boolean = true;
  user:any;
  isLoggedIn:boolean = false;
  lat:any;
  lang:any;
  constructor(private fb:FormBuilder, private router:Router,private authService: SocialAuthService, 
    private attorneyService:AttorneyServiceService, private loginService:LoginService, private snackBar:MatSnackBar) {
    
   }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.isLoggedIn = (user != null);
      console.log("user",this.user);
      if(this.user != null){
        //this.dialogRef.close(this.user)
         this.logout()
         this.isLoggedIn = true;
         console.log(this.isLoggedIn);
      }else{
        // this.loading = false;
      }
    });
    this.loginForm = this.fb.group({
      emailID:["",Validators.required],
      password:["",[Validators.required,Validators.minLength(8)]],
      deviceID:" ",
      deviceToken:" ",
      deviceType:"web"
    });
   
    this.getLatLang()
  }
  
  logout(){
    this.authService.signOut().then(data=>{
      console.log("Signout",data);
    })
  }
  forgotPage(){
    this.router.navigateByUrl('/forgotPassword');
  }
// Get current location lat and lang
getLatLang(){
  // this.loginService.getPosition().then(pos=>
  //   {
  //     this.lat = pos.lat;
  //     this.lang = pos.lng;
  //      console.log(`Positon: ${pos.lng} ${pos.lat}`);
      
  //   });
}
  userDetailsPage(){
    this.router.navigateByUrl('/home')
  }
     //message alerts showing
     openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
         duration: 3000,
         verticalPosition: 'bottom'
      });
    }
  login(){
    if(this.loginForm.valid){
      this.attorneyService.showLoader.next(true);
      this.loginService.login(this.loginForm.value).subscribe((posRes)=>{
        this.attorneyService.showLoader.next(false);
        if(posRes.response == 3){      
          console.log("Success",posRes);
          localStorage.setItem('attorneyInfo',JSON.stringify(posRes.clientInfo));
          this.openSnackBar(posRes.message,"");
          this.attorneyService.isLoggedIn.next(true);
          this.router.navigateByUrl('/main')
        }else{
          this.openSnackBar(posRes.message,"")
        }
      },(err:HttpErrorResponse)=>{
        this.attorneyService.showLoader.next(false);
        this.openSnackBar(err.message,"");
        if(err.error instanceof Error){
          console.warn("Client Side Error",err.message);
        }else{
          console.warn("Server Side Error",err.message);
        }
      })
    }else{
      this.openSnackBar("Provide required data to login","");
      this.loginForm.controls['userID'].markAsTouched();
      this.loginForm.controls['password'].markAsTouched();
    }
  }
 
  // Fetch User INFO
  fetchUserInfo(){
    this.attorneyService.showLoader.next(true);
  let obj = {
    emailID: this.loginForm.value.emailID
  }
    this.loginService.fetchUserInfo(obj).subscribe((posRes)=>{
      this.attorneyService.showLoader.next(false);
      if(posRes.response == 3){
        this.user = {...posRes.clientInfo}
        localStorage.setItem('attorneyInfo',JSON.stringify(this.user));
        this.rememberMe ? localStorage.setItem('rememberme','true') : localStorage.setItem('rememberme','false');
        this.openSnackBar(posRes.message,"");
        this.attorneyService.isLoggedIn.next(true);
        this.router.navigateByUrl('/main');
      }else{
        this.openSnackBar(posRes.message,"")
      }
      
    },(err:HttpErrorResponse)=>{
      this.attorneyService.showLoader.next(false);
      this.openSnackBar(err.message,"");
      if(err.error instanceof Error){
        console.warn("Client Slide Error",err.message);
      }else{
        console.warn("Server Slide Error",err.message);
      }
    })
  }
  rememberMe(event){
    console.log(event.checked);
  }

  
}
