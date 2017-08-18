import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PcpCalendarPage } from './pcp-calendar';

@NgModule({
  declarations: [
    PcpCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(PcpCalendarPage),
  ],
  exports: [
    PcpCalendarPage
  ]
})
export class PcpCalendarPageModule {}
