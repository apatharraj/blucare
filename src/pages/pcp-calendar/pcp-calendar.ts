import { TEMPLATE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { TemplateParser } from '@angular/compiler/compiler';
import { Component, OnInit, ViewChild,Pipe, PipeTransform} from '@angular/core';
import { Directive, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pcpcalendarServices } from './pcp-calendar-service';
import { SameDayQAPage } from '../same-day-q-a/same-day-q-a';
import { CalendarComponent } from "ionic2-calendar/calendar";


import { DatePipe } from '@angular/common';
/**
 * Generated class for the PcpCalendarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pcp-calendar',
  templateUrl: 'pcp-calendar.html',
  providers:[DatePipe]
})

export class PcpCalendarPage implements OnInit {
  public availableDate = [];
  public doctorName = localStorage.getItem('UserDoctorName');
  showvall: any;
  Availslotid: any;
  frmtime: any;
  toTime: any;
  bodate: any;
  changedate: any;
  changedateMob: any;
  currentDate = new Date();
  public todayEvent;
  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
  public eventSource = [];
  public calenderMonths:any[]=[
    {
      "id":0,
      "month":"January",
      "shortMonth":"Jan"
    },
    {
      "id":1,
      "month":"Febuary",
      "shortMonth":"Feb"
    },
    {
      "id":2,
      "month":"March",
      "shortMonth":"Mar"
    },
    {
      "id":3,
      "month":"April",
      "shortMonth":"Apr"
    },
    {
      "id":4,
      "month":"May",
      "shortMonth":"May"
    },
    {
      "id":5,
      "month":"June",
      "shortMonth":"Jun"
    },
    {
      "id":6,
      "month":"July",
      "shortMonth":"Jul"
    },
    {
      "id":7,
      "month":"August",
      "shortMonth":"Aug"
    },
    {
      "id":8,
      "month":"September",
      "shortMonth":"Sep"
    },
    {
      "id":9,
      "month":"October",
      "shortMonth":"Oct"
    },
    {
      "id":10,
      "month":"November",
      "shortMonth":"Nov"
    },{
      "id":11,
      "month":"December",
      "shortMonth":"Dec"
    }
  ];
  


  public DateAvilable:any[] = [
    {
      "bookingStatus": false,
      "date": "02-07-2017",
      "doctorId": "00dae66aca1134a164c591e4af475e7c",
      "filterTime": 1487154600000,
      "fromTime": "10:30 AM",
      "id": "6d0d07e3b5324d8fcff5343707b1d94d",
      "periods": "AM",
      "toTime": "11:00 AM"
    },
    {
      "bookingStatus": false,
      "date": "08-07-2017",
      "doctorId": "00dae66aca1134a164c591e4af475e7c",
      "filterTime": 1487154600000,
      "fromTime": "10:30 AM",
      "id": "6d0d07e3b5324d8fcff5343707b1d94d",
      "periods": "AM",
      "toTime": "11:00 AM"
    },
    {
      "bookingStatus": false,
      "date": "08-09-2017",
      "doctorId": "00dae66aca1134a164c591e4af475e7c",
      "filterTime": 1487154600000,
      "fromTime": "10:30 AM",
      "id": "6d0d07e3b5324d8fcff5343707b1d94d",
      "periods": "AM",
      "toTime": "11:00 AM"
    },
    {
      "bookingStatus": false,
      "date": "08-09-2017",
      "doctorId": "00dae66aca1134a164c591e4af475e7c",
      "filterTime": 1487154600000,
      "fromTime": "10:30 AM",
      "id": "6d0d07e3b5324d8fcff5343707b1d94d",
      "periods": "AM",
      "toTime": "11:00 AM"
    },
    {
      "bookingStatus": false,
      "date": "08-09-2017",
      "doctorId": "00dae66aca1134a164c591e4af475e7c",
      "filterTime": 1487154600000,
      "fromTime": "10:30 AM",
      "id": "6d0d07e3b5324d8fcff5343707b1d94d",
      "periods": "AM",
      "toTime": "11:00 AM"
    },
    {
      "bookingStatus": false,
      "date": "08-09-2017",
      "doctorId": "00dae66aca1134a164c591e4af475e7c",
      "filterTime": 1487154600000,
      "fromTime": "11:30 AM",
      "id": "6d0d07e3b5324d8fcff5343707b1d94d",
      "periods": "AM",
      "toTime": "11:00 AM"
    },
    {
      "bookingStatus": false,
      "date": "08-10-2017",
      "doctorId": "00dae66aca1134a164c591e4af475e7c",
      "filterTime": 1487154600000,
      "fromTime": "11:30 AM",
      "id": "6d0d07e3b5324d8fcff5343707b1d94d",
      "periods": "AM",
      "toTime": "12:00 PM"
    },
    {
      "bookingStatus": false,
      "date": "09-10-2017",
      "doctorId": "00dae66aca1134a164c591e4af475e7c",
      "filterTime": 1487154600000,
      "fromTime": "11:30 AM",
      "id": "6d0d07e3b5324d8fcff5343707b1d94d",
      "periods": "AM",
      "toTime": "12:00 PM"
    }
  ];
  public initCalenderMonth:number;
  public initCalenderYear;
  public calenderDates:any[]=[];
  public getCurMonth:any;
  public getCurMonthString:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public PcpCalendarServices: pcpcalendarServices,public datepipe:DatePipe) {
    let calYear=new Date().toString();
    let x=calYear.split(" ");
    this.initCalenderYear=x[3];
      for(let j=0;j<this.calenderMonths.length;j++){
        if(x[1]==this.calenderMonths[j].shortMonth){
          this.initCalenderMonth=this.calenderMonths[j].id;
          this.getCurMonth=this.calenderMonths[j].id;
          this.getCurMonthString=this.calenderMonths[j].shortMonth;
        } 
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PcpCalendarPage');
  }

// Change Calender Month and Fetch Month Dates
  calenderMonthEvent(event){
    if(event==="increment"){
      if(this.initCalenderMonth<=11){
        this.initCalenderMonth++;
        for(let countMonth=0;countMonth<this.calenderMonths.length;countMonth++){
          if(this.initCalenderMonth===this.calenderMonths[countMonth].id){
  this.getCurMonth=this.calenderMonths[countMonth].id;
  this.getCurMonthString=this.calenderMonths[countMonth].shortMonth;
}
        }
        this.calculateMonthDates();
      }
    }else{
      if(this.initCalenderMonth>0){
        this.initCalenderMonth--;
        this.calculateMonthDates();
      }
    }
  }

  calenderYearEvent(year){
    if(year==="increment"){
      this.initCalenderYear=this.initCalenderYear++;
    }else{
      this.initCalenderYear=this.initCalenderYear--;
    }
  }

  calculateMonthDates(){
   
    let calenderLimit=["31","28","31","30","31","30","31","30","31","30","31"];
    let calenderDate;
    this.calenderDates=[];
    if(this.initCalenderMonth===1){
      if( (0 == this.initCalenderYear % 4) && (0 != this.initCalenderYear % 100) || (0 == this.initCalenderYear % 400) )
        {
          calenderDate=calenderLimit[this.initCalenderMonth]="29"
        }else{
          calenderDate=calenderLimit[this.initCalenderMonth];
        }
    }else{
      calenderDate=calenderLimit[this.initCalenderMonth];
    }
    let dates;
    let bookDates;  
    for(let i=1;i<=calenderDate;i++){
      for(let j=0;j<this.DateAvilable.length;j++){
        bookDates=this.DateAvilable[j].date.split("-");
        let todayDate=new Date().toString().split(" ");
        this.todayEvent=todayDate[2];
        console.log(this.getCurMonth,bookDates[1])
        if(this.getCurMonth==parseInt(bookDates[1])){
          if(i==parseInt(bookDates[0])){
              dates={
              "id":i,
              "value":i,
              "book":true,
              "date":this.DateAvilable[j].date
            }
            this.calenderDates.push(dates);
          }
        
        }else{
          if(this.getCurMonth !==parseInt(bookDates[1])){
          dates={
            "id":i,
            "value":i,
            "book":false
          }
          
        }
      }

    }
    this.calenderDates.push(dates);
    console.log(this.calenderDates);
  }
}
 
  

  ngOnInit() {

    this.calculateMonthDates()
}
}

@Pipe({name: 'groups'})
export class GroupsPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    var groups = {};
    value.forEach(function(o) {
      var group = o.date;
      groups[group] = groups[group] ?
         groups[group] : { name: group, resources: [] };
      groups[group].resources.push(o);  
    });

    return Object.keys(groups).map(function (key) {return groups[key]});
  }
}