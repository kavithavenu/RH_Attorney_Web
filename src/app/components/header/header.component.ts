import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean = true;
  routerEndPoint:string = '';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateToHome(){
    this.router.navigateByUrl('/main')
  }
  loginPage(){
    this.router.navigateByUrl('/login')
  }
  toHomePage(){
    this.router.navigateByUrl('/home');
    this.routerEndPoint = "home";
  }
  clients(){
    
    this.router.navigateByUrl('/clients');
    this.routerEndPoint = "clients";
  }

  consultationPage(){
    this.router.navigateByUrl('/consultationresults')
  }
  isNotLoginPages():Boolean{
    if ((this.router.url != '/') && (this.router.url != '/login') && (this.router.url != '/register')&& (this.router.url != '/forgotPassword')
    &&  (this.router.url != '/resetPassword') && (this.router.url != '/updatepassword') && (this.router.url !='/after-call') && (this.router.url !='/jointhecall') ) {
              return true;
      }
      return false;
  }

  isNotLoginVisable():Boolean{
    if((this.router.url !='/') && (this.router.url !='/home') && (this.router.url !='/userdetails/generalinfo') && (this.router.url !='/userdetails/newcase')
    &&(this.router.url !='/calender') && (this.router.url !='/mycase') && (this.router.url !='/notifications' )){
      return true;
    }
    return false;
  }
 
}
