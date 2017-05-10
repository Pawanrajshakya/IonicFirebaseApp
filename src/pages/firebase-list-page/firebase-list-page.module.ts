import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseListPage } from './firebase-list-page';

@NgModule({
  declarations: [
    FirebaseListPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseListPage),
  ],
  exports: [
    FirebaseListPage
  ]
})
export class FirebaseListPageModule {}
