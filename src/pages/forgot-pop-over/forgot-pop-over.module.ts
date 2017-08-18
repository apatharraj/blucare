import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotPopOverPage } from './forgot-pop-over';

@NgModule({
  declarations: [
    ForgotPopOverPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotPopOverPage),
  ],
  exports: [
    ForgotPopOverPage
  ]
})
export class ForgotPopOverPageModule {}
