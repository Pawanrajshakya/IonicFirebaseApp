import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Home, Login } from '../pages/pages';

import { MenuService } from '../services/menu.services';
import { AuthService } from '../services/auth.services';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = Home;

  pages: Array<{ title: string, description: string, component: any, icon: string, active: boolean }>;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public modalCtrl: ModalController,
    public menuService: MenuService,
    public authService: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.prepareMenu()
    });
  }

  prepareMenu() {
    this.menuService.getObserable().subscribe((data) => {
      this.pages = data;
    })
  }

  menuClicked(item: { title: string, description: string, component: any, icon: string, active: boolean }) {
    switch (item.component) {
      case 'Logout':
        this.authService.logout().then(() => {
        }).catch((error) => {
          console.log(error);
        });
        break;
      case 'Login':
        this.modalCtrl.create(Login).present();

      default:
        break;
    }
  }
}