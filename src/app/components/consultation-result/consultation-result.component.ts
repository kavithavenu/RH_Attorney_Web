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
    let index = -1;
    index = this.matterDescriptionsList.findIndex((val) => {
      return (
        val.id ===
        value.id
      );
    });
    if (index != -1) {
      let obj = this.matterDescriptionsList[index];
      console.log("index val...", obj)
      this.selectedRow = this.matterDescriptionsList[index].id;
      console.log("obj", obj);
      //console.log("addTestDateDetails...", this.addTestDateDetails.value)
      //this.modalService.dismissAll()
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
