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
var FirebaseObjectPage = (function () {
    function FirebaseObjectPage(navCtrl, navParams, afdb, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.persons = afdb.object('/p4/p6');
    }
    FirebaseObjectPage.prototype.save = function (newName) {
        this.persons.set({ name: newName });
    };
    FirebaseObjectPage.prototype.update = function (newAge) {
        this.persons.update({ age: newAge });
    };
    FirebaseObjectPage.prototype.delete = function () {
        this.persons.remove();
    };
    return FirebaseObjectPage;
}());
FirebaseObjectPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-firebase-object-page',
        templateUrl: 'firebase-object-page.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams,
        AngularFireDatabase, AngularFireAuth])
], FirebaseObjectPage);
export { FirebaseObjectPage };
//# sourceMappingURL=firebase-object-page.js.map