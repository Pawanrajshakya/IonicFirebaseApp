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
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthService } from '../../services/auth.services';
import { Login } from '../../pages/login/login';
var Home = (function () {
    function Home(navCtrl, navParams, authService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
    }
    Home.prototype.login = function () {
        var modal = this.modalCtrl.create(Login);
        modal.onDidDismiss(function (data) {
            console.log(data);
        });
        modal.present();
    };
    Home.prototype.logout = function () {
        this.authService.logout().then(function () { }).catch(function (error) { console.log(error); });
    };
    return Home;
}());
Home = __decorate([
    IonicPage(),
    Component({
        selector: 'page-home',
        templateUrl: 'home.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams,
        AuthService,
        ModalController])
], Home);
export { Home };
//# sourceMappingURL=home.js.map