import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-call',
  templateUrl: './after-call.component.html',
  styleUrls: ['./after-call.component.css']
})
export class AfterCallComponent implements OnInit {
  isLoading:boolean;
  openSendFeeAgreement:boolean = true;
  constructor(private router:Router) { }

  ngOnInit(): void {
        
    let result = sessionStorage.getItem('myBoolean')

    console.log("isLoading value from session storage...",result);

    if(result !== null){
      this.isLoading = (result.toLowerCase() === 'true') ;
      console.log("string to bool ", this.isLoading)  
      setTimeout(()=>{
        //sessionStorage.clear();
        //sessionStorage.removeItem('myBoolean');
        this.isLoading = false;
      },4000)
    }
    else{
      this.isLoading = false ;
      console.log("string to bool ", this.isLoading)
    }

  }

  sendFeeAgree(){
    this.router.navigateByUrl('/home/consultation-result')
    
  }

}
