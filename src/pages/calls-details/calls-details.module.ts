import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallsDetailsPage } from './calls-details';

@NgModule({
  declarations: [
    CallsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CallsDetailsPage),
  ],
})
export class CallsDetailsPageModule {}
