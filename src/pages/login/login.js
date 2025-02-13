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
import { IonicPage, NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { AuthService } from '../../services/auth.services';
import { ToastService } from '../../services/toast.service';
var Login = (function () {
    function Login(navCtrl, navParams, viewCtrl, loadingCtrl, authService, toastService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.toastService = toastService;
        this.username = "";
        this.password = "";
    }
    Login.prototype.signup = function (email, password) {
        var _this = this;
        this.authService.createUser(email, password)
            .then(function (data) {
            _this.viewCtrl.dismiss(false);
        }).catch(function (error) {
            _this.toastService.present(error.message);
        });
    };
    Login.prototype.login = function () {
        var _this = this;
        this.authService.loginWithGoogle().then(function (data) {
            _this.viewCtrl.dismiss(false);
        }).catch(function (error) {
            _this.toastService.present(error.message);
        });
    };
    Login.prototype.loginWithPassword = function (email, password) {
        var _this = this;
        this.authService.loginWithPassword(email, password).then(function (data) {
            _this.viewCtrl.dismiss(false);
        }).catch(function (error) {
            _this.toastService.present(error.message);
        });
    };
    Login.prototype.dismiss = function () {
        this.viewCtrl.dismiss(false);
    };
    return Login;
}());
Login = __decorate([
    IonicPage(),
    Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        ViewController,
        LoadingController,
        AuthService,
        ToastService])
], Login);
export { Login };
//# sourceMappingURL=login.js.map