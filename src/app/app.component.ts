import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Home } from '../pages/home/home';

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

  prepareMenu(){
    this.menuService.getObserable().subscribe((data)=>{
      console.log('menu', data);
      this.pages = data;
    })
  }

  menuClicked(item: { title: string, description: string, component: any, icon: string, active: boolean }) {
    if (item.component = 'Logout') {
      this.authService.logout().then(() => {
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}