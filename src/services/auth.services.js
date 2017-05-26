var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
var AuthService = (function () {
    function AuthService(auth) {
        var _this = this;
        this.auth = auth;
        this.uid = null;
        this.email = null;
        this.displayName = null;
        this.photoURL = null;
        this.getUser().then().catch(function () {
            _this.clearProperties();
        });
    }
    AuthService.prototype.createUser = function (email, password) {
        return this.auth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.status = function () {
        this.auth.authState.subscribe(function (data) {
            return (data === null) ? false : true;
        }, function (error) {
            return false;
        });
        return false;
    };
    AuthService.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.authState.subscribe(function (data) {
                console.log('1.0', data);
                if (data === null) {
                    _this.clearProperties();
                    reject({ message: "Please login." });
                }
                else {
                    _this.uid = data.uid;
                    _this.displayName = data.displayName;
                    _this.photoURL = data.photoURL;
                    _this.email = data.email;
                    resolve(data);
                }
            }, function (error) {
                _this.clearProperties();
                reject(error);
            });
        });
    };
    AuthService.prototype.getUserObservable = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.auth.authState.subscribe(function (data) {
                console.log('11.0', data);
                if (data === null) {
                    _this.clearProperties();
                }
                else {
                    _this.uid = data.uid;
                    _this.displayName = data.displayName;
                    _this.photoURL = data.photoURL;
                    _this.email = data.email;
                }
                observer.next(data);
            });
        });
    };
    AuthService.prototype.loginWithGoogle = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function (data) {
                console.log('1.2', data);
                resolve(true);
            }).catch(function (error) {
                reject(false);
            });
        });
    };
    AuthService.prototype.loginWithPassword = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.auth.signInWithEmailAndPassword(email, password).then(function (data) {
                resolve(true);
            }).catch(function (error) {
                reject(false);
            });
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.auth.auth.signOut().then(function () {
            _this.clearProperties();
        });
    };
    AuthService.prototype.clearProperties = function () {
        this.uid = null;
        this.displayName = null;
        this.photoURL = null;
        this.email = null;
    };
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFireAuth])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.services.js.map