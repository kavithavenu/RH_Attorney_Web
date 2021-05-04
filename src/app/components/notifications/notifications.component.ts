import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications:any=[
    {
      "id":"1",
      "img":"",
      "content":"Hi Manish! You have an upcoming consultation in 2 hours, click here to complete the additional questions to make your consultation more productive.",
      "time":"1616561617000"
    },
    {
      "id":"2",
      "img":"",
      "content":"Hi Manish! You have an upcoming consultation in 2 hours, click here to complete the additional questions to make your consultation more productive.",
      "time":"1616561117000"
    },
    {
      "id":"3",
      "img":"",
      "content":"Hi Manish! You have an upcoming consultation in 2 hours, click here to complete the additional questions to make your consultation more productive.",
      "time":"1616511117000"
    },
    {
      "id":"4",
      "img":"",
      "content":"Hi Manish! You have an upcoming consultation in 2 hours, click here to complete the additional questions to make your consultation more productive.",
      "time":"1616501117000"
    }
  ];
  todayDate:any = new Date();
  selectedRow: any;
  hoveredElement:number;
  constructor() { }

  ngOnInit(): void {
  }

  mouseEnter(i){
    this.hoveredElement = i;
      }
      mouseLeave(){
    this.hoveredElement = undefined;
      }
}
