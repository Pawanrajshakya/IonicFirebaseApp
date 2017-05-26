import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Shopping } from './shopping';

@NgModule({
  declarations: [
    Shopping,
  ],
  imports: [
    IonicPageModule.forChild(Shopping),
  ],
  exports: [
    Shopping
  ]
})
export class ShoppingModule {}
