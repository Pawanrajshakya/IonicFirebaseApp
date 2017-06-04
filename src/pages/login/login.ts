import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { AuthService } from '../../services/auth.services';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  username: string = "";
  password: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public authService: AuthService,
    public toastService: ToastService) {
  }

  signup(email, password) {
    this.authService.createUser(email, password)
      .then(data => {
        this.viewCtrl.dismiss(false);
      }).catch(error => {
        console.log(error);
        this.toastService.present(error.message);
      })
  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
      this.viewCtrl.dismiss(false);
    }).catch(error => {
      this.toastService.present(error.message);
    });
  }

  loginWithPassword(email, password) {
    this.authService.loginWithPassword(email, password).then((data) => {
      this.viewCtrl.dismiss(false);
    }).catch((error) => {
      this.toastService.present(error.message);
    });
  }

  dismiss() {
    this.viewCtrl.dismiss(false);
  }
}
