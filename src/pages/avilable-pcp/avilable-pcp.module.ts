import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvilablePcpPage } from './avilable-pcp';

@NgModule({
  declarations: [
    AvilablePcpPage,
  ],
  imports: [
    IonicPageModule.forChild(AvilablePcpPage),
  ],
  exports: [
    AvilablePcpPage
  ]
})
export class AvilablePcpPageModule {}
