import { OnInit } from '@angular/core/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AppointmentTypePage } from '../appointment-type/appointment-type';
import { DashboardServices } from './dashboardService';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { UserSchedulePage } from '../user-schedule/user-schedule';
import { MenuPage } from '../menu/menu'
import { dateFormatPipe } from './datepipe'
import { PcpCalendarPage } from '../pcp-calendar/pcp-calendar';
import { AvilablePcpPage } from '../avilable-pcp/avilable-pcp';


/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage implements OnInit {
  private notification: number;
  private rating: number;
  private getAppointment: any;
  private appointmentDetails: any;
  private cancelAppointment: any;
  private bookDate: any;
  private wish: any;
  private UserPhoto: any;
  private newDate: any;
  private count: any;
  private deleteAppointment: any;

  inAppointType: any;
  dltId: any;
  doctorsIdstate: any;
  menuPage = MenuPage;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public dashboardServices: DashboardServices, private geolocation: Geolocation, private platform: Platform) {
    let getAppointments;
    // platform.ready().then(() => {
    //   let latitude = localStorage.getItem('UserCurent_Lat');
    //   let longitude = localStorage.getItem('UserCurent_Long');
    //   // get current position
    //   geolocation.getCurrentPosition().then(pos => {
    //     console.log('lat: ' + pos.coords.latitude + ', long: ' + pos.coords.longitude);
    //     localStorage.setItem("UserCurent_Lat", latitude);
    //     localStorage.setItem("UserCurent_Long", longitude);
    //   });
    //   let watchOptions = {
    //     timeout: 3000,
    //     enableHighAccuracy: false
    //   };

    //   const watch = geolocation.watchPosition(watchOptions).subscribe(pos => {
    //     console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    //   });
    //   // to stop watching
    //   watch.unsubscribe();

    // });

    //Get userphot from localstorage
    this.UserPhoto = localStorage.getItem("UserPhoto");

    // Randomly Generated Notification and Rating
    let RandomNotification;
    RandomNotification = Math.ceil(Math.random() * 5) + 3;
    let RandomRating;
    RandomRating = Math.ceil(Math.random() * 80) + 2;

    this.notification = RandomNotification;
    this.rating = RandomRating;

    // Get Wish time condition
    let myDate = new Date();
    let hrs = myDate.getHours();

    let greet;

    if (hrs < 12)
      greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 16)
      greet = 'Good Afternoon';
    else if (hrs >= 16 && hrs <= 24)
      greet = 'Good Evening';

    this.wish = greet;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  //Appointment Type (Today / Scheduled)

  goToAppoinment(AppointMethod) {
    localStorage.setItem('appType', 'true');
    let now = new Date();
    let appoinmentDate = Date.now();
    localStorage.setItem("AppointmentDate", 'appoinmentDate');

    localStorage.setItem("isRescheduled", "false");
    localStorage.setItem("ScheduledType", '1');
    this.inAppointType = "Same Day Appointment";
    localStorage.setItem("inAppointType", this.inAppointType);
    this.navCtrl.push(AppointmentTypePage);
    console.log('goToAppoinment')

  }

  goToAppoinmentNew(AppointMethod) {
    localStorage.setItem('appType', 'false');
    // this.appoint((localStorage.getItem("AppointmentDate")) =>{
    // });
    localStorage.removeItem("AppointmentDate");
    this.inAppointType = "Schedule an Appointment";
    localStorage.setItem("inAppointType", this.inAppointType);
    localStorage.setItem("ScheduledType", '2');
    localStorage.setItem("isRescheduled", "false");
    this.navCtrl.push(AppointmentTypePage);
  }

  // Reschedule Appointment
  reschudleApp = function (getdetail) {
    // alert('Check');
    console.log(getdetail);
  };

  reshedule(getdetail) {
    debugger
    localStorage.setItem("isRescheduled", 'true');
    localStorage.setItem("UserDoctorName", getdetail.doctorName);
    var Details = getdetail; //angular.toJson(responcearray)
    console.log(Details);
    debugger;
    localStorage.setItem("ScheduledDetailed", JSON.stringify(Details));
    this.doctorsIdstate = Details.doctorId;
    localStorage.setItem("availabilitySlotID", Details.availabilitySlotID);
    debugger;
    if (Details.type == 1) {
      this.navCtrl.push(PcpCalendarPage, { Id: this.doctorsIdstate });
    } else { this.navCtrl.push(AvilablePcpPage); }

    console.log(this.reshedule, "test")

  };


  getAppointments() {
    let userId = localStorage.getItem('ID_login');

    this.dashboardServices.OndashboardGetApp(userId).subscribe(res => {
      this.count = res.response.length;
      this.getAppointment = res.response;
      for (var i = 0; i < this.getAppointment.length; i++) {
        var bdate = this.getAppointment[i].bookedDate;
        var finalDate = bdate.slice(0, 4) + "-" + bdate.slice(4, 6) + "-" + bdate.slice(6, 8);
        console.log(finalDate);
        this.getAppointment[i].newDate = new Date(finalDate);
      }
      console.log(this.getAppointment)
      this.appointmentDetails = this.getAppointment;
    }, error => console.log(error));
  };

  //Delete Appointment
  dltAppointment(objs: any) {
    debugger;
    this.dltId = objs.id;
    let confirmPopup = this.alertCtrl.create({
      title: 'Delete Appointment',
      message: 'Are you sure you want to delete this appointment?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.deleteApp(objs);
          }
        }
      ]
    });
    confirmPopup.present();
  }
  deleteApp(res) {

    if (res) {

      //         this.dashboardServices.OndeleteAppointment(this.dltId).subscribe(response => {
      //           debugger;
      //           this.show_loading = false;
      //           // location.reload();
      //           //this.callapoitment();
      //    console.log(response)
      //    if(response){
      //       this.refresh();
      // }

      //         });
      this.dashboardServices.OndeleteAppointment(this.dltId).subscribe(response => {
        if (response) {
          this.getAppointments();
        }
      }, error => console.log(error))
      console.log('Schedule Deleted !!');
    } else {

      console.log('You are not sure');
    }
  }


  goToUserSchedule() {
    this.navCtrl.push(UserSchedulePage);
  }

  cancelAppoint(obj :any) {

    this.dashboardServices.OndashboardCancelApp(obj).subscribe(res => {
      this.cancelAppointment = res;
      console.log(obj)
    }, error => console.log(error));

  };
  
  caclAppointment(obj) {

    if (obj.appointmentType > 2) {
      var alertPopup = this.alertCtrl.create({
        title: 'Cancelled',
        message: 'Already cancelled !!'
      });

      alertPopup.present();
    } else {

      var confirmPopup1 = this.alertCtrl.create({
        title: 'Cancel Appointment',
        message: 'Are you sure you want to cancel this appointment?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              this.cancelAppoint(obj);
            }
          }
        ]

      });
      confirmPopup1.present();
    }


  }




  // dltAppointment(getdetail) {
  //   this.dltId = getdetail.response.id;
  // }




  ngOnInit() {

    this.getAppointments();


    // Cancel Appointment Service
    // let obj = 'test';
    // this.dashboardServices.OndashboardCancelApp(obj).subscribe(res => {
    //   this.cancelAppointment = res;
    //   console.log(this.cancelAppointment)
    // }, error => console.log(error));

    // Delete Appointment Service
    // let id = localStorage.getItem('obj.id');
    // this.dashboardServices.OndeleteAppointment(id).subscribe(res => {
    //   this.deleteAppointment = res.response;
    //   console.log(this.deleteAppointment)
    // }, error => console.log(error));

  }

}
