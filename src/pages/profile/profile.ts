import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AuthService } from '../../services/auth.services';
import { ToastService } from '../../services/toast.service';
import { Login } from '../login/login';

@IonicPage()
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
