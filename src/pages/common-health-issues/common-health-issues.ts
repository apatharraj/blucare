import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvilablePcpPage } from '../avilable-pcp/avilable-pcp';

/**
 * Generated class for the CommonHealthIssuesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-common-health-issues',
  templateUrl: 'common-health-issues.html',
})
export class CommonHealthIssuesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommonHealthIssuesPage');
  }
  onavilablepcppage(commonHealthIssues) {
    localStorage.setItem("commonHealthIssues",commonHealthIssues);
    this.navCtrl.push(AvilablePcpPage);
  }
}
