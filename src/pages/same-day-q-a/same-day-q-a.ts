import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TermsConditionPage} from '../terms-condition/terms-condition';

/**
 * Generated class for the SameDayQAPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-same-day-q-a',
  templateUrl: 'same-day-q-a.html',
})
export class SameDayQAPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ontermsconditionPage(){
    this.navCtrl.push(TermsConditionPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SameDayQAPage');
  }

}
