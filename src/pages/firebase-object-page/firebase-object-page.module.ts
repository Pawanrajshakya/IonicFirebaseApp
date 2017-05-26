import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseObjectPage } from './firebase-object-page';

@NgModule({
  declarations: [
    FirebaseObjectPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseObjectPage),
  ],
  exports: [
    FirebaseObjectPage
  ]
})
export class FirebaseObjectPageModule {}
