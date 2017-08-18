import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  public alarmTime: Date;
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, private localNotifications: LocalNotifications) {
  }

  public schedule() {
    this.alarmTime = new Date();
    this.alarmTime.setMinutes(this.alarmTime.getMinutes() + 2);
    let Details = JSON.parse(localStorage.getItem("ScheduledDetailed"));
    console.log()
    this.localNotifications.schedule({
      id: Details.id,
      at: this.alarmTime,
      data: "You have a schedule",
      title: "Appointment on " + Details.date + " at " + Details.appointmentDetails.fromTime,
      sound: null
    });
  }
  closeModal() {
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad yModalPage');
  }

}
