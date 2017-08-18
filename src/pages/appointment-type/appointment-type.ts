import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonHealthIssuesPage } from '../common-health-issues/common-health-issues';

/**
 * Generated class for the AppointmentTypePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-appointment-type',
  templateUrl: 'appointment-type.html',
})
export class AppointmentTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentTypePage');
  }
   goToCommonHealthIssue(){
    this.navCtrl.push(CommonHealthIssuesPage);
  }

}
