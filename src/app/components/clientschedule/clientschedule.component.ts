 import { Component, OnDestroy, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-clientschedule',
  templateUrl: './clientschedule.component.html',
  styleUrls: ['./clientschedule.component.css']
})
export class ClientscheduleComponent implements OnInit {

  signedInAs:any = JSON.parse(localStorage.getItem('attorneySignAs'));
  constructor() { }

  ngOnInit(): void {
    
  }

}
