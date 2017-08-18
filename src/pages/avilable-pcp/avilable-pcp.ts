import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { avilablepcpServices } from './avilablepcpService';
import { PcpCalendarPage } from '../pcp-calendar/pcp-calendar';
import { OnDemandPcpCalendarPage } from '../on-demand-pcp-calendar/on-demand-pcp-calendar';
import { RatingModule } from "ng2-rating";

/**
 * Generated class for the AvilablePcpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-avilable-pcp',
  templateUrl: 'avilable-pcp.html',
})
export class AvilablePcpPage implements OnInit {
  private recentDoc: any;
  private recomDoc: any;
  private appTye: any;
  private recomDocJson: any;
  private sorting: any;
  public Sort: string = "ratings";
  constructor(public navCtrl: NavController, public navParams: NavParams, public AvilablePcpPageServices: avilablepcpServices) {

    let getUserId = localStorage.getItem("ID_login");
    let getUserCurent_Lat = localStorage.getItem("UserCurent_Lat");
    let getUserCurent_Long = localStorage.getItem("UserCurent_Long");


  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad AvilablePcpPage');
  }

  rating(rating) {
    alert(rating);
    this.Sort = rating;
    
  }
  // onpcpcalendarPage() {
  //   this.navCtrl.push(OnDemandPcpCalendarPage)
  // }

  getavaildate() {
    var now = new Date();
    var date = date.now;
    var model = {
      "doctorId": localStorage.getItem("DoctorID"),
      "date": date,
      "type": 2

    }
  }

  ondemandpcpcalendarPage(docs) {
    console.log(docs);
    let id = docs.id;
    localStorage.setItem('setid', docs.id );
    localStorage.setItem('UserDoctorName', docs.doctorName);
    this.appTye = localStorage.getItem('appType');
    localStorage.setItem('docPhone', docs.phoneNumber);
    localStorage.setItem("DoctorID", docs.id);

    let bookDate = "";
    if (localStorage.getItem("ScheduledType")) {
      bookDate = localStorage.getItem("AppointmentDate");
      //this.navCtrl.push('PcpCalendarPage', { Id: docs.id });
    } else {
      this.getavaildate();
    }
    localStorage.setItem("UserDoctorName", docs.doctorName);
    localStorage.setItem("DoctorID", docs.id);
    localStorage.setItem("UserDoctorName", docs.doctorName);
    localStorage.setItem("DoctorhospitalAddress", docs.hospitalAddress);
    localStorage.setItem("DoctorhospitalName", docs.hospitalName);
    localStorage.setItem("DoctorLAT", docs.latlng.lat);
    localStorage.setItem("DoctorLONG", docs.latlng.lng);
    localStorage.setItem("DoctorMiles", docs.miles);
    localStorage.setItem("DoctorPhotoUrl", docs.photoUrl);
    localStorage.setItem("DoctorPhoneNO", docs.phoneNumber);

    if (this.appTye === "true") {
      console.log(this.appTye);
      console.log("true part");
      this.navCtrl.push(OnDemandPcpCalendarPage, { id })
    }
    else {
      console.log(this.appTye);
      console.log("else part");
      this.navCtrl.push(PcpCalendarPage, { id })
    }

  }

  ngOnInit() {
    let modal = {
      "userId": localStorage.getItem("ID_login"),
      "lat": 42.296488,
      "lng": -71.712369
    };

    let recomModal = {
      "userId": localStorage.getItem("ID_login"),
      "orderBy": 'distance',
      "lat": 42.296488,
      "lng": -71.712369
    };

    this.AvilablePcpPageServices.onAvilablepcpRecentVisitedDoctors(modal).subscribe(res => {
      this.recentDoc = res.response;
      console.log(this.recentDoc, "rr")
    }, error => console.log(error));

    this.AvilablePcpPageServices.onAvilablepcpRecomededDoctors(recomModal).subscribe(res => {
      this.recomDoc = res.response;
      console.log(this.recomDoc, "yr")
    }, error => console.log(error));

    // Local Json File For Recommeded Doctors(Sorting)
    this.AvilablePcpPageServices.OnRecomededJson().subscribe(res => {
      this.recomDocJson = res.rec;
      this.sorting = 'distance';
      console.log(this.recomDocJson, "recom")
    }, error => console.log(error));
  }
}
