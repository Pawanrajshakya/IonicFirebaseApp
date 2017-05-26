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
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
var FirebaseListPage = (function () {
    function FirebaseListPage(navCtrl, navParams, afdb, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = afdb.list('/category');
    }
    FirebaseListPage.prototype.addItem = function (text) {
        this.items.push({ text: text, isActive: true });
    };
    FirebaseListPage.prototype.updateItem = function (key, newText, newValue) {
        this.items.update(key, { text: newText, value: newValue });
    };
    FirebaseListPage.prototype.deleteItem = function (key) {
        this.items.remove(key);
    };
    FirebaseListPage.prototype.deleteEverything = function () {
        this.items.remove();
    };
    return FirebaseListPage;
}());
FirebaseListPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-firebase-list-page',
        templateUrl: 'firebase-list-page.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AngularFireDatabase,
        AngularFireAuth])
], FirebaseListPage);
export { FirebaseListPage };
//# sourceMappingURL=firebase-list-page.js.map