import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { DashboardPage } from '../dashboard/dashboard';
import { OnDemandPcpCalendarPage } from '../on-demand-pcp-calendar/on-demand-pcp-calendar';
import { PcpCalendarPage } from '../pcp-calendar/pcp-calendar';
import { AvilablePcpPage } from '../avilable-pcp/avilable-pcp';

/**
 * Generated class for the ConfirmationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
})
export class ConfirmationPage {
  public phoneNumber: any;
  doctorsIdstate: any;
  private appTye: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, private call: CallNumber, private localNotifications: LocalNotifications) {
    // LocalNotifications.on("click", (notification, state) => {
    //   let alert = Alert.create({
    //     title: "Notification Clicked",
    //     subTitle: "You just clicked the scheduled notification",
    //     buttons: ["OK"]
    //   });
    //   this.navController.present(alert);
    // });
  }


  // async callNumber():Promise<any>{
  //   try{
  //     await this.call.callNumber('11234343', true);
  //   }
  //   catch(e){
  //     console.error(e);
  //   }
  // }
  callDoctor() {
    this.phoneNumber = localStorage.getItem('docPhone');
    this.call.callNumber(this.phoneNumber, true)
      .then(() => console.log('Launched dialer!'))
      .catch((err) => console.log('Error launching dialer', err));
  }

  onDashboard() {
    this.navCtrl.setRoot(DashboardPage);
  }
  reshedule() {
    let appTye = localStorage.getItem('appType');
    let id=localStorage.getItem('setid' );
    console.log(id);
    if (appTye === "true") {
      console.log(appTye);
      console.log("true part");
      this.navCtrl.push(OnDemandPcpCalendarPage, { id })
    }
    else {
      console.log(appTye);
      console.log("else part");
      this.navCtrl.push(PcpCalendarPage, { id })
    }
  }

  // reshedule = function () {
  //   alert('reschedule');
  //   localStorage.setItem("isRescheduled", 'true');
  //   if (localStorage.getItem("ScheduledDetailed")) {
  //     var Details = this.angular.fromJson(localStorage.getItem("ScheduledDetailed")); //angular.toJson(responcearray)
  //     console.log(Details);
  //     this.doctorsIdstate = Details.doctorId;
  //     localStorage.setItem("availabilitySlotID", Details.availabilitySlotID);
  //     debugger;
  //     if (Details.type == 1) {
  //       this.navCtrl.push(PcpCalendarPage, { Id: this.doctorsIdstate });

  //     } else { this.navCtrl.push(AvilablePcpPage); }
  //   }
  // };


  // reshedule(getdetail) {
  //   debugger
  //   localStorage.setItem("isRescheduled", 'true');
  //   localStorage.setItem("UserDoctorName", getdetail.doctorName);
  //   var Details = getdetail; //angular.toJson(responcearray)
  //   console.log(Details);
  //   debugger;
  //   localStorage.setItem("ScheduledDetailed", JSON.stringify(Details));
  //   this.doctorsIdstate = Details.doctorId;
  //   localStorage.setItem("availabilitySlotID", Details.availabilitySlotID);
  //   debugger;
  //   if (Details.type == 1) {
  //     this.navCtrl.push(PcpCalendarPage, { Id: this.doctorsIdstate });
  //   } else { this.navCtrl.push(AvilablePcpPage); }

  //   console.log(this.reshedule, "test")

  // };



  openModal() {
    const myModal = this.modal.create('ModalPage');
    myModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationPage');
  }

}
