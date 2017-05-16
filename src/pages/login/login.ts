import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.services';
import { ToastService } from '../../services/toast.service';
import { TabPage } from '../tab-page/tab-page';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  username: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public toastService: ToastService) {
    this.authService.getUser().then((data) => {
      navCtrl.setRoot(TabPage);
    }).catch(error => {
      this.toastService.present(error.message);
    });
  }

  signup(email, password) {
    this.authService.createUser(email, password)
      .then(data => {
        this.loginWithPassword(email, password);
      }).catch(error => {
        this.toastService.present(error.message);
      })
  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
      this.navCtrl.setRoot(TabPage);
    }).catch(error => {
      this.toastService.present(error.message);
    });
  }

  loginWithPassword(email, password) {
    this.authService.loginWithPassword(email, password).then((data) => {
      this.navCtrl.setRoot(TabPage);
    }).catch(error => {
      this.toastService.present(error.message);
    });
  }

  logout() {
    this.authService.logout().catch(error => {
      this.toastService.present(error.message);
    })
  }

}
