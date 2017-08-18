import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SameDayQAPage } from './same-day-q-a';

@NgModule({
  declarations: [
    SameDayQAPage,
  ],
  imports: [
    IonicPageModule.forChild(SameDayQAPage),
  ],
  exports: [
    SameDayQAPage
  ]
})
export class SameDayQAPageModule {}
