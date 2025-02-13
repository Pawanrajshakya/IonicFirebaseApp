var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Home } from '../pages/home/home';
import { MenuService } from '../services/menu.services';
import { AuthService } from '../services/auth.services';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuService, authService) {
        var _this = this;
        this.menuService = menuService;
        this.authService = authService;
        this.rootPage = Home;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.prepareMenu();
        });
    }
    MyApp.prototype.prepareMenu = function () {
        var _this = this;
        this.menuService.getObserable().subscribe(function (data) {
            console.log('menu', data);
            _this.pages = data;
        });
    };
    MyApp.prototype.menuClicked = function (item) {
        if (item.component = 'Logout') {
            this.authService.logout().then(function () {
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    return MyApp;
}());
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform,
        StatusBar,
        SplashScreen,
        MenuService,
        AuthService])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map