import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean = false
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateToHome(){
    this.router.navigateByUrl('/main')
  }
  loginPage(){
    this.router.navigateByUrl('/login')
  }
  homePage(){
    this.router.navigateByUrl('/home')

  }
  isNotLoginPages():Boolean{
    if ((this.router.url != '/') && (this.router.url != '/login') && (this.router.url != '/register')&& (this.router.url != '/forgotPassword')
    &&  (this.router.url != '/resetPassword') && (this.router.url != '/updatepassword') ) {
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
