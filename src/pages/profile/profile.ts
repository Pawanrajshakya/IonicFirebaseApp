import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastService: ToastService) {
  }


  logout() {
    // this.authService.logout().then((data) => {
    //   //this.navCtrl.popTo(Login);
    //   // this.navCtrl.popAll().then(()=>{
    //   this.authService.getUser().then(() => {
    //     //this.navCtrl.setRoot(Login);
    //   });

    //   // });
    // }).catch((error) => {

    // })
  }

}
