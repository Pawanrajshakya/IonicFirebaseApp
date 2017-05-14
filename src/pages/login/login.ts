import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { authService } from '../../services/auth.services';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  user: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: authService) {
    this.logout();
  }

  login() {


    this.authService.getUser().then((data) => {
      console.log('?',data);      
      this.user = data;
    }).catch((error) => {
      console.log(error);
      this.authService.loginWithGoogle().then((data) => {
        this.authService.getUser().then((data) => {
          this.user = data;
        });
      });
    })
  }

  logout() {
    this.authService.logout();
  }

}
