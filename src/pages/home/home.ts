import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthService } from '../../services/auth.services';

import { Login } from '../../pages/login/login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authService: AuthService,
    public modalCtrl: ModalController) {

  }

  login() {
    let modal = this.modalCtrl.create(Login);
    modal.onDidDismiss((data) => {
      console.log(data);
    });
    modal.present();
  }

  logout() {
    this.authService.logout().then(() => { }).catch((error) => { console.log(error); })
  }

}
