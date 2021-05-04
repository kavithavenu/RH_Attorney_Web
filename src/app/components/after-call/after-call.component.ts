import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-call',
  templateUrl: './after-call.component.html',
  styleUrls: ['./after-call.component.css']
})
export class AfterCallComponent implements OnInit {
isLoading:boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isLoading = false;
    },4000)
  }

}
