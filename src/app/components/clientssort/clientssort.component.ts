import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AttorneyServiceService } from 'src/app/services/attorney-service.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-clientssort',
  templateUrl: './clientssort.component.html',
  styleUrls: ['./clientssort.component.css']
})
export class ClientssortComponent implements OnInit {

  members:any=[
    {
      "img":"../../../assets/pic3.jpg",
      "name":"Client Name 1",
      
    },
    {
      "img":"../../../assets/pic3.jpg",
      "name":"Client Name 2",
      
    },
    {
      "img":"../../../assets/pic3.jpg",
      "name":"Client Name 3",
      
    },
  ]
  FirmClients:boolean = false;
  MyClients:boolean = false;
  TeamClients:boolean = false;
  selected=-1;
  fetchedTeamClientsData:any = [];
  filteredfetchedTeamClientsData:any=[];
  attorneyData:any;
  attorneyID:any;
  baseURL:any = 'http://dev-api.robinsonandhenry.com';
  constructor(private router:Router,private fb: FormBuilder,
    private attorneyService:AttorneyServiceService, private loginService:LoginService, 
    private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.attorneyData = JSON.parse(localStorage.getItem('attorneyInfo'));
    this.attorneyID = this.attorneyData.emailID;
    console.log("attorney logged in as a from local data...",JSON.parse(localStorage.getItem('attorneyInfo')));
       
    this.onLoad();
  }

  onLoad(){
    this.fetchFirmClients();
  }
  fetchFirmClients(){
    console.log("clicked on firm clients...");
    this.attorneyService.showLoader.next(true);
    let payLoad = {
      "pageNo":"1",
      "size":"2"
    }
  
    this.loginService.fetchFirmClientAPI(payLoad).subscribe((posRes)=>{
      this.attorneyService.showLoader.next(false);
      if(posRes.response == 3){      
        console.log("Success",posRes.results);
        this.fetchedTeamClientsData = posRes.results;
        this.filteredfetchedTeamClientsData = this.fetchedTeamClientsData;
        console.log("fetched firm clients data is ...",this.fetchedTeamClientsData);
        this.openSnackBar(posRes.message,"");
        this.attorneyService.isLoggedIn.next(true);
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
  }
  fetchMyClients(){
    console.log("clicked on My clients...");
    //fetchTeamClientAPI
    this.attorneyService.showLoader.next(true);
    let payLoad = {
      "attorneyID":"showri@rafayee.com",//this.attorneyID
      "pageNo":"1",
      "size":"3"
    }
    this.loginService.fetchMyClientAPI(payLoad).subscribe((posRes)=>{
      this.attorneyService.showLoader.next(false);
      if(posRes.response == 3){      
        console.log("Success",posRes.clientInfo);
        this.fetchedTeamClientsData = posRes.clientInfo;
        this.filteredfetchedTeamClientsData = this.fetchedTeamClientsData;
        console.log("fetched team clients data is ...",this.fetchedTeamClientsData);
        //localStorage.setItem('attorneySignAs',JSON.stringify(this.attorneyLogginedAs));
        //console.log("attorney logged in as a from local data...",JSON.parse(localStorage.getItem('attorneySignAs')));
        //localStorage.setItem('attorneyInfo',JSON.stringify(posRes.clientInfo));
        this.openSnackBar(posRes.message,"");
        this.attorneyService.isLoggedIn.next(true);
        //this.router.navigateByUrl('/main')
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
  }
  fetchTeamClients(){
    console.log("clicked on Team clients...");
   // this.attorneyService.showLoader.next(true);
   
  }

  openclinetPage(){
    this.router.navigateByUrl('/clients/clientschedule');
  }

  searchOnAppointments(term: string) {
    if (!term) {
      this.fetchedTeamClientsData = this.filteredfetchedTeamClientsData;
    } else {
      this.fetchedTeamClientsData = this.filteredfetchedTeamClientsData.filter(x =>
        x.firstName.trim().toLowerCase().includes(term.trim().toLowerCase())
      );
    }
  }

   //message alerts showing
   openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 3000,
       verticalPosition: 'bottom'
    });
  }

}
