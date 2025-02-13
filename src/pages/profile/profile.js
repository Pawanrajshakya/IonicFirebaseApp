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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AuthService } from '../../services/auth.services';
import { ToastService } from '../../services/toast.service';
var Profile = (function () {
    function Profile(navCtrl, navParams, toastService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastService = toastService;
    }
    Profile.prototype.logout = function () {
        // this.authService.logout().then((data) => {
        //   //this.navCtrl.popTo(Login);
        //   // this.navCtrl.popAll().then(()=>{
        //   this.authService.getUser().then(() => {
        //     //this.navCtrl.setRoot(Login);
        //   });
        //   // });
        // }).catch((error) => {
        // })
    };
    return Profile;
}());
Profile = __decorate([
    IonicPage(),
    Component({
        selector: 'page-profile',
        templateUrl: 'profile.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        ToastService])
], Profile);
export { Profile };
//# sourceMappingURL=profile.js.map