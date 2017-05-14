import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.services';
import { ToastService } from '../../services/toast.service';
import {TabPage} from '../tab-page/tab-page';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  username: string = "";
  password: string = "";

  user: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public toastService: ToastService) {
    this.logout();
  }

  signup(email, password) {

    this.authService.createUser(email, password)
      .then(data => {
        //do something here
      }).catch(error => {
        this.toastService.present(error.message);
      })
  }

  login() {
    this.authService.getUser().then((data) => {
      this.user = data;
      //do something here
      if (data){
            this.navCtrl.setRoot(TabPage);
          }
    }).catch((error) => {
      this.authService.loginWithGoogle().then((data) => {
        this.authService.getUser().then((data) => {
          this.user = data;
          if (data){
            this.navCtrl.setRoot(TabPage);
          }
        }).catch(error => {
          this.toastService.present(error.message);
        });
      }).catch(error => {
        this.toastService.present(error.message);
      });
    })
  }

  loginWithPassword(email, password) {
    this.authService.getUser().then((data) => {
      this.user = data;
      //do something here
      if (data){
            this.navCtrl.setRoot(TabPage);
          }
    }).catch((error) => {
      this.authService.loginWithPassword(email, password).then((data) => {
        this.authService.getUser().then((data) => {
          this.user = data;
          if (data){
            this.navCtrl.setRoot(TabPage);
          }
        }).catch(error => {
          this.toastService.present(error.message);
        });
      }).catch(error => {
        this.toastService.present(error.message);
      });
    })
  }

  logout() {
    this.authService.logout().then(() => {
      this.user = {};
    }).catch(error => {
      this.toastService.present(error.message);
    })
  }

}
