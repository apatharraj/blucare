import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnDemandPcpCalendarPage } from './on-demand-pcp-calendar';

@NgModule({
  declarations: [
    OnDemandPcpCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(OnDemandPcpCalendarPage),
  ],
  exports: [
    OnDemandPcpCalendarPage
  ]
})
export class OnDemandPcpCalendarPageModule {}
