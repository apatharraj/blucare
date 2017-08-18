import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppointmentTypePage } from '../appointment-type/appointment-type';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the UserSchedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-schedule',
  templateUrl: 'user-schedule.html',
})
export class UserSchedulePage {
  todo: any;
  LoginUserName: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.LoginUserName = localStorage.getItem("userName_login");
    console.log(this.LoginUserName);
  }


  goToAppoinment() {
    localStorage.setItem('appType', 'true');
    this.navCtrl.push(AppointmentTypePage);
  }

  goToAppoinmentNew() {
    localStorage.setItem('appType', 'false');
    this.navCtrl.push(AppointmentTypePage);
  }
  onDashboard() {
    this.navCtrl.setRoot(DashboardPage);
  }
  onre
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSchedulePage');
  }

}
