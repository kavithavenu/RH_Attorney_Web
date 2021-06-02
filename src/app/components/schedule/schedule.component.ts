import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { defineLocale, enGbLocale } from 'ngx-bootstrap/chronos';
import { BsDaterangepickerDirective, BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  bsInlineValue:any;
  availableTimeSlots:Array<any> = [];
  queryParams:any;
  timeStamp:number = 0;
  mrngAvblTimeSlots:Array<any> = [
 {end: 1618543800, object: "time_slot", start: 1618543800, status: "free"},
 {end: 1618545600, object: "time_slot", start: 1618545600, status: "free"},
 {end: 1618547400, object: "time_slot", start: 1618547400, status: "free"},
 {end: 1618549200, object: "time_slot", start: 1618549200, status: "free"},
 {end: 1618551000, object: "time_slot", start: 1618551000, status: "free"},
  {end: 1618554600, object: "time_slot", start: 1618552800, status: "free"},

 
  
  ];
  aftnAvblTimeSlots:Array<any> = [
 {end: 1618556400, object: "time_slot", start: 1618554600, status: "free"},
 {end: 1618558200, object: "time_slot", start: 1618556400, status: "free"},
 {end: 1618560000, object: "time_slot", start: 1618558200, status: "free"},
 {end: 1618561800, object: "time_slot", start: 1618560000, status: "free"},
 {end: 1618563600, object: "time_slot", start: 1618561800, status: "free"},
 {end: 1618565400, object: "time_slot", start: 1618563600, status: "free"},
 {end: 1618567200, object: "time_slot", start: 1618565400, status: "free"},
 {end: 1618569000, object: "time_slot", start: 1618567200, status: "free"},
 {end: 1618570800, object: "time_slot", start: 1618569000, status: "free"},
 {end: 1618572600, object: "time_slot", start: 1618570800, status: "free"},
 {end: 1618574400, object: "time_slot", start: 1618572600, status: "free"},
 {end: 1618576200, object: "time_slot", start: 1618574400, status: "free"},
  ];
  isTimeSelected:boolean = false;
  selectedTime:any = 0;
  selectedDate:any ;
  minDate = new Date();
  disabledDates:any;
  public attorneyDetails:any;
  isFirstCall:boolean = false;
public img:any = "";
public userDetails:any = {};
  @ViewChild('content',{static: true}) successModal:any;
  @ViewChild('datePicker', { static: false }) datePicker:BsDaterangepickerDirective;
  constructor(private localeService: BsLocaleService,  private activatedRoute:ActivatedRoute,
    private router:Router,private  dialog:MatDialog, private modalService:NgbModal) { 
      enGbLocale.weekdaysShort = ["S", "M", "T", "W", "T", "F", "S"];
    enGbLocale.week.dow = 0;
    
    defineLocale("en-gb", enGbLocale);
    }

  ngOnInit(): void {
  }
  
  openSuccess() {
    let closeResult = ""
    this.modalService.open(this.successModal, {ariaLabelledBy: 'modal-basic-title',centered: true}).result.then((result) => {
      closeResult = `Closed with: ${result}`;
    }, (reason) => {
      closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  onValueChange(evnt){
    this.selectedDate = evnt;
    debugger;
    if(evnt.getTime() == this.bsInlineValue.getTime() && this.queryParams.params.isSelected == "true"){
      this.isTimeSelected = true;
    }else{
      this.isTimeSelected = false;
      this.selectedTime = 0;
    }
    let today = new Date().setHours(0,0,0,0);
    this.availableTimeSlots = [];
     this.mrngAvblTimeSlots = [];
    this.aftnAvblTimeSlots = [];
    let time:any 
    let isSameDate = new Date(evnt).setHours(0,0,0,0)
    if(today == isSameDate){
      time = new Date();
      time = Math.floor(time.getTime()/1000);
    }else{
  time = new Date(evnt.setHours(0,0,0,0))
  time = Math.floor(time.getTime()/1000);
    }
   
  }
  selectMrngTimes(index){
    this.selectedTime = this.mrngAvblTimeSlots[index].start;
    this.isTimeSelected = true;
  }
  selectAftnTimes(index){
    this.selectedTime = this.aftnAvblTimeSlots[index].start;
    this.isTimeSelected = true;
  }
  closeModal(){
    this.modalService.dismissAll();
  }
}
