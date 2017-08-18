import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentTypePage } from './appointment-type';

@NgModule({
  declarations: [
    AppointmentTypePage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentTypePage),
  ],
  exports: [
    AppointmentTypePage
  ]
})
export class AppointmentTypePageModule {}
