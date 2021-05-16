import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consultation-result',
  templateUrl: './consultation-result.component.html',
  styleUrls: ['./consultation-result.component.css']
})
export class ConsultationResultComponent implements OnInit {
  disableEdit:boolean = false;
  selectedRow: any;
  sendMessageForm:FormGroup;
  openConsultationNotes:boolean = false;
  pageIndex:number = 0;
  paymentOtions:Array<any> = [1,2,3,4,5,6]
  showDescInput:boolean = false;
    matterDescriptionsList:any = [
    {
      "id":"1",
      "data":"matter description one data"
    },
    {
      "id":"2",
      "data":"matter description two data"
    },
    {
      "id":"3",
      "data":"matter description three data"
    },
    {
      "id":"4",
      "data":"matter description four data"
    },
    {
      "id":"5",
      "data":"matter description five data"
    },
    {
      "id":"6",
      "data":"matter description six data"
    },
    {
      "id":"7",
      "data":"Other"
    }
  ]
    
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sendMessageForm = this.fb.group({
      typedMessage:""
    })
  }

  selectedDesc(value: any) {
    console.log(value);
    this.selectedRow = value.id;
    if(value.data == "Other"){
      this.showDescInput = true;
    }else{
      this.showDescInput = false;
    }
  }

  otherOption(){
    console.log("clicked on other...")
    //this.disableEdit = true;
    this.disableEdit ? this.disableEdit : this.disableEdit = true;
  }
  gotoAddDesc(){
    console.log("gotoAddDesc...")
    this.openConsultationNotes = true;
  }
  sendMessage(){
    console.log(this.sendMessageForm.value)
  }



}
