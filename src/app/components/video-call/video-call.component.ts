import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.css']
})
export class VideoCallComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
    sessionStorage.setItem('myBoolean', 'true')
    console.log(sessionStorage.getItem('myBoolean'))
    
  }

  endVideoCall(){
    this.router.navigateByUrl('/after-call')
  }

}
