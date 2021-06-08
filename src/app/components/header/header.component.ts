import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AttorneyServiceService } from 'src/app/services/attorney-service.service';
//import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLoggedIn:boolean = false;
imgSrc:string = "assets/users_2.png";
routerEndPoint:string = "";
homePageVisitingCount:number = 0;
custInfo:any;
baseUrl:string = "";
proPic:string = "assets/ic_md@2x.png"
  constructor(private router:Router, private dialog:MatDialog, private attorneyService:AttorneyServiceService, private activatedRoute:ActivatedRoute) { 
    this.attorneyService.isLoggedIn.subscribe(val => {
      this.isLoggedIn = val;
      if(val){
        this.fecthCustInfo()
      }
    })
  }

  ngOnInit(): void {
    this.baseUrl = "http://dev-api.robinsonandhenry.com";
    this.fecthCustInfo()
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        console.log(this.router.url);
        let url = this.router.url.split('/');
        this.routerEndPoint = url[1]
        if(url[1] == 'mycase'){
          this.imgSrc = "assets/users_1.png"
        }else{
          this.imgSrc = "assets/users_2.png"
        }
        
      }
    });
  }
  fecthCustInfo(){
    let info  = JSON.parse(localStorage.getItem('attorneyInfo'));
    if(info && info.profilePic){
      this.custInfo = info;
      this.isLoggedIn = true;
      debugger;
      if(this.custInfo.register_type === "Manual" || this.custInfo.isProfileUpdate){
        this.proPic = this.baseUrl+this.custInfo.profilePic;
      }else{
        this.proPic = this.custInfo.profilePic;
      }

    }
    }
  mouseEnter(){
    this.imgSrc = "assets/users_1.png";
  }
  mouseLeave(){
    this.imgSrc = "assets/users_2.png";
  }
  navigateToHome(){
    this.router.navigateByUrl('/main')
  }
  loginPage(){
    this.router.navigateByUrl('/login')
  }
  signUpPage(){
    this.router.navigateByUrl('/register')
  }

  notificationPage(){
    this.router.navigateByUrl('/notifications')
  }
  openQuiryModal(){
   this.homePage()
  }

  homePage(){
    this.router.navigateByUrl('/home')
    this.routerEndPoint = 'home';
    this.imgSrc = "assets/users_2.png";

  }

  calenderPage(){
    this.router.navigateByUrl('/calenderData');
    this.routerEndPoint = 'calenderData';
    this.imgSrc = "assets/users_2.png";
  }

  myCasePage(){
    this.router.navigateByUrl('/clients')
    this.routerEndPoint = 'clients';
    this.imgSrc = "assets/users_1.png";
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
