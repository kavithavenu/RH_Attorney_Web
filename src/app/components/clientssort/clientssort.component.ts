import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  openclinetPage(){
    this.router.navigateByUrl('/openclientmatter')

  }

}
