import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserSchedulePage } from './user-schedule';

@NgModule({
  declarations: [
    UserSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(UserSchedulePage),
  ],
  exports: [
    UserSchedulePage
  ]
})
export class UserSchedulePageModule {}
