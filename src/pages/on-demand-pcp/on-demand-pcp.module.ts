import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnDemandPcpPage } from './on-demand-pcp';
@NgModule({
  declarations: [
    OnDemandPcpPage,
  ],
  imports: [
    IonicPageModule.forChild(OnDemandPcpPage),
  ],
  exports: [
    OnDemandPcpPage
  ]
})
export class OnDemandPcpPageModule {}
