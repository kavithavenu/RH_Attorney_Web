import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-meetings',
  templateUrl: './fetch-meetings.component.html',
  styleUrls: ['./fetch-meetings.component.css']
})
export class FetchMeetingsComponent implements OnInit {
  consultationsArray:Array<any> = [];
  meetings:Array<any> =[];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.consultationsArray = [
      {
        image:"assets/profile-1.jpg",
        caption:"",
        name:"Client Name1"
      },
      {
        image:"assets/pic3.jpg",
        caption:"2 Days Overdue",
        name:"Client Name2"
      }
    ];
    this.meetings = [
      {
        image:"assets/profile-1.jpg",
        caption:"Estate Planning In Office Consult",
        name:"Manish Dhakal",
        time:"9:30 AM",
        isWaiting: true
      },
      {
        image:"assets/pic3.jpg",
        caption:"Estate Planning In Office Consult",
        name:"Client Name1",
        time:"9:30 AM",
        isWaiting: false
      },
      {
        image:"assets/profile-1.jpg",
        caption:"Estate Planning In Office Consult",
        name:"Client Name2",
        time:"9:30 AM",
        isWaiting: false
      },
      {
        image:"assets/pic4.jpg",
        caption:"Estate Planning In Office Consult",
        name:"Client Name3",
        time:"9:30 AM",
        isWaiting: false
      }
    ]
  }
  clientProfilePage(){
    
  }
}
