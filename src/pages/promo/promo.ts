import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConfirmationPage} from '../confirmation/confirmation';

/**
 * Generated class for the PromoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-promo',
  templateUrl: 'promo.html',
})
export class PromoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   onconfirmationPage(){
    this.navCtrl.push(ConfirmationPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromoPage');
  }

}
