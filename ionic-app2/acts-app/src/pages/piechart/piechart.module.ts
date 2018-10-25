import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PiechartPage } from './piechart';

@NgModule({
  declarations: [
    PiechartPage,
  ],
  imports: [
    IonicPageModule.forChild(PiechartPage),
  ],
})
export class PiechartPageModule {}
