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
  socialMediaForm:FormGroup;
  hide:boolean = true;
  user:any;
  isLoggedIn:boolean = false;
  lat:any;
  lang:any
  socialuserInfo = {
    "lastName" : "",
    "phoneNumber" : "",
    "deviceType" : "web",
    "register_type" : "",
    "profilePic" : "",
    "firstName" : "",
    "deviceID" : "",
    "longitude" : "",
    "tokenID" : "",
    "emailID" : "",
    "latitude" : "",
    "deviceToken" : "",
    "ID" : ""
  }
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
         this.socialMediaLogin(user);
         this.isLoggedIn = true;
         console.log(this.isLoggedIn);
      }else{
        // this.loading = false;
      }
    });
    this.loginForm = this.fb.group({
      emailID:["",Validators.required],
      password:["",Validators.required]
    });
    this.socialMediaForm = this.fb.group({
      "lastName" : ["",Validators.required],
    "phoneNumber" : [""],
    "deviceType" : ["web"],
    "register_type" : ["",Validators.required],
    "profilePic" : [""],
    "firstName" : ["",Validators.required],
    "longitude" : ["00"],
    "tokenID" : ["",Validators.required],
    "emailID" : [""],
    "latitude" : ["",Validators.required],
    "deviceToken" : [""],
    "ID" : ["",Validators.required]
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
  this.loginService.getPosition().then(pos=>
    {
      this.lat = pos.lat;
      this.lang = pos.lng;
       console.log(`Positon: ${pos.lng} ${pos.lat}`);
       this.socialMediaForm.patchValue({
        latitude:""+ this.lat,
        longitude:""+ this.lang
       })
    });
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
          localStorage.setItem('custInfo',JSON.stringify(posRes.clientInfo));
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
          console.warn("Client Slide Error",err.message);
        }else{
          console.warn("Server Slide Error",err.message);
        }
      })
    }else{
      this.loginForm.controls['userID'].markAsTouched();
      this.loginForm.controls['password'].markAsTouched();
    }
  }
  socialMediaLogin(user){
    if(user.email == undefined){
     this.openSnackBar("We are not allowing users without mail id's","")
     return;
    }
    this.attorneyService.showLoader.next(true)
    let providerType = user.provider.toLowerCase();
    let pType = providerType.charAt(0).toUpperCase() + providerType.slice(1);
this.socialMediaForm.patchValue({
  "lastName" : user.lastName,
  "deviceType" : "web",
  "phoneNumber" : "",
  "register_type" : pType,
  "profilePic" : user.photoUrl,
  "firstName" : user.firstName,
  "tokenID" : user.idToken,
  "emailID" : user.email,
  "ID" : user.id
})
if(user.phoneNumber){
  this.socialMediaForm.get('phoneNumber').setValue(user.phoneNumber);
}
this.loginService.socialMediaLogin(this.socialMediaForm.value).subscribe((posRes)=>{
  this.attorneyService.showLoader.next(false)
  if(posRes.response == 3){
    if(posRes && posRes.clientInfo){
      this.user = {...posRes.clientInfo}
      localStorage.setItem('custInfo',JSON.stringify(this.user));
      this.openSnackBar(posRes.message,"");
      this.attorneyService.isLoggedIn.next(true);
  this.router.navigateByUrl('/main');
    }else{
      this.fetchUserInfo()
    }
  }else{
    this.openSnackBar(posRes.message,"");
  }
},(err:HttpErrorResponse)=>{
  this.attorneyService.showLoader.next(false)
  if(err.error instanceof Error){
    this.openSnackBar(err.message,"")
    console.log("Cse",err);
  }else{
    
    this.openSnackBar(err.message,"")
    console.log("SSE",err);
    
  }
  
})
  }
  // Fetch User INFO
  fetchUserInfo(){
    this.attorneyService.showLoader.next(true);
  let obj = {
    emailID: this.socialMediaForm.value.emailID
  }
    this.loginService.fetchUserInfo(obj).subscribe((posRes)=>{
      this.attorneyService.showLoader.next(false);
      if(posRes.response == 3){
        this.user = {...posRes.clientInfo}
        localStorage.setItem('custInfo',JSON.stringify(this.user));
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
