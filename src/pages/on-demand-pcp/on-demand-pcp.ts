import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnDemandPcpCalendarPage } from '../on-demand-pcp-calendar/on-demand-pcp-calendar';
// import{doctor} from '../doctors.modal';
import { onDemandServices } from './on-demand-pcp-services';

/**
 * Generated class for the OnDemandPcpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-on-demand-pcp',
  templateUrl: 'on-demand-pcp.html',
})
export class OnDemandPcpPage {
  private recentDoctors: any;
  // doctors: doctor[] = [
  //   new doctor('http://ui-nsf.augusta-stg.com/IBM-BlueCare/images/available_pcp/u511.png', 'Dr. Alice Lawson', 'Highland Hospital', '7453 Golden Avenue', '1.3 miles', 'Appox. copay $50'),
  //   new doctor('http://ui-nsf.augusta-stg.com/IBM-BlueCare/images/available_pcp/u547.png', 'Dr. Jesse Hardy', 'Alameda County Medical Center', '1369 Stanley Street', '1.5 miles', 'Appox. copay $60'),
  //   new doctor('http://ui-nsf.augusta-stg.com/IBM-BlueCare/images/on-demand_pcp/u698.png', 'Dr. Benjamin Green', 'Eden Medical Center', '4113 Sunny Avenue', '2 miles', 'Appox. copay $60'),
  //   new doctor('http://ui-nsf.augusta-stg.com/IBM-BlueCare/images/available_pcp/u530.png', 'Dr. Sofia Goodwin', 'West Age Hospital', '2665 High-Low Way', '5 miles', 'Appox. copay $60'),
  // ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public onDemandServices: onDemandServices) {
  }
  // ondemandpcpcalendarPage() {
  //   this.navCtrl.push(OnDemandPcpCalendarPage);
  // }

  ionViewDidLoad() {

    console.log('');
    
  }
  ondemandpcpcalendarPage(docs) {
    let id=docs.id;
    localStorage.setItem('UserDoctorName',docs.doctorName);
    this.navCtrl.push(OnDemandPcpCalendarPage,{id})
  }

 ngOnInit() {
    let now = new Date();
    let modal = {
      "doctorId": localStorage.getItem("DoctorID"),
      "date": now,
      "type": 2
    };

    this.onDemandServices.onDemandPcp(modal).subscribe(res => {
      this.recentDoctors = res.response;
      console.log(this.recentDoctors)
    }
      , error => console.log(error))
  }
  

}
