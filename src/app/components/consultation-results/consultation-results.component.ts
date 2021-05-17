import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultation-results',
  templateUrl: './consultation-results.component.html',
  styleUrls: ['./consultation-results.component.css']
})
export class ConsultationResultsComponent implements OnInit {

  members:any=[
    {
      "img":"../../../assets/pic3.jpg",
      "name":"Client Name_2",
      "post":"vedaslabs@gmail.com",
      "text":"oooooo",
    },
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  clientSortPage(){
    this.router.navigateByUrl('/clientsort')
  }

  clientschedulePage(){
    this.router.navigateByUrl('/clientschedule')
  }

}
