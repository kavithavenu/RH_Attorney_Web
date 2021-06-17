import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  FirmClients:boolean = false;
  MyClients:boolean = false;
  TeamClients:boolean = false;
  selected=-1;
  constructor(private router:Router,private fb: FormBuilder) { }

  ngOnInit(): void {
   
  }

  openclinetPage(){
    this.router.navigateByUrl('/clients/clientschedule');
  }

}
