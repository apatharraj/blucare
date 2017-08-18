import { Component,Pipe,PipeTransform,TemplateRef} from '@angular/core';
import {
  IonicPage, NavController, NavParams, ModalController, ViewController, AlertController,
  LoadingController, App
} from 'ionic-angular';
import { SameDayQAPage } from '../same-day-q-a/same-day-q-a';
import { BlucareServicesProvider } from '../../providers/blucare-services/blucare-services'
import { ondemandpcpcalendarservice } from './on-demand-pcp-calendar-service';

/**
 * Generated class for the OnDemandPcpCalendarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-on-demand-pcp-calendar',
  templateUrl: 'on-demand-pcp-calendar.html',
  providers: [BlucareServicesProvider]
}) 
export class OnDemandPcpCalendarPage {
  private dateAvilableToBook: any;
  private doctor: any;
  private Doctorname: any;
  public currentDate;
  public newDate=new Date();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public blucareService: BlucareServicesProvider,
    public Ondemandpcpcalendar: ondemandpcpcalendarservice,
    public modal: ModalController,
    public view: ViewController,
    private alertCtrl: AlertController) {
  }
  

  bookDoctor(data){
    localStorage.setItem('bookDetails',JSON.stringify(data));
    localStorage.setItem("ScheduledType","1");
    this.navCtrl.push(SameDayQAPage);
  }


  ngOnInit() {
    this.Doctorname = localStorage.getItem("UserDoctorName");
    let now = new Date();
    let modal = {
      "doctorId": localStorage.getItem("DoctorID"),
      "type": 1
    };
    this.Ondemandpcpcalendar.onDemandPcp(modal).subscribe(res => {
      let getCurrentDateSplit = new Date().getMonth().toString().split('');
      let currentMonth=new Date().getMonth() + 1;
      if (getCurrentDateSplit.length == 1) {
        this.currentDate = "0" + currentMonth + "-" + new Date().getDate() + "-" + new Date().getFullYear();
      } else {
        this.currentDate = currentMonth + "-" + new Date().getDate() + "-" + new Date().getFullYear();
      }
      this.dateAvilableToBook=res.response;
    }
      , error => console.log(error))
  }

}


        