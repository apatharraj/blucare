import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AvilablePcpPage} from '../avilable-pcp/avilable-pcp';
import {OnDemandPcpPage} from '../on-demand-pcp/on-demand-pcp';
import {TermsConditionPage} from '../terms-condition/terms-condition';
import {PromoPage} from '../promo/promo';
import {ConfirmationPage} from '../confirmation/confirmation';
import {SameDayQAPage} from '../same-day-q-a/same-day-q-a';
import {PcpCalendarPage} from '../pcp-calendar/pcp-calendar';
import {OnDemandPcpCalendarPage} from '../on-demand-pcp-calendar/on-demand-pcp-calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onavilablepcppage(){
    this.navCtrl.push(AvilablePcpPage);
  }
  ondemandpcpPage(){
    this.navCtrl.push(OnDemandPcpPage);
  }
   ontermsconditionPage(){
    this.navCtrl.push(TermsConditionPage);
  }
   onpromoPage(){
    this.navCtrl.push(PromoPage);
  }
  onsamedayQAPage(){
    this.navCtrl.push(SameDayQAPage);
  }
   onconfirmationPage(){
    this.navCtrl.push(ConfirmationPage);
  }
   onpcpcalendarPage(){
    this.navCtrl.push(PcpCalendarPage);
  }
   ondemandpcpcalendarPage(){
    this.navCtrl.push(OnDemandPcpCalendarPage);
  }

}
