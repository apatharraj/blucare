import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonHealthIssuesPage } from './common-health-issues';

@NgModule({
  declarations: [
    CommonHealthIssuesPage,
  ],
  imports: [
    IonicPageModule.forChild(CommonHealthIssuesPage),
  ],
  exports: [
    CommonHealthIssuesPage
  ]
})
export class CommonHealthIssuesPageModule {}
