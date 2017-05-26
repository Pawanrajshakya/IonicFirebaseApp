var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Shopping } from '../shopping/shopping';
import { Profile } from '../profile/profile';
import { FirebaseObjectPage } from '../firebase-object-page/firebase-object-page';
import { FirebaseListPage } from '../firebase-list-page/firebase-list-page';
//import { AuthService } from '../../services/auth.services';
var TabPage = (function () {
    function TabPage() {
        this.homePage = Shopping;
        this.objectPage = FirebaseObjectPage;
        this.listPage = FirebaseListPage;
        this.profilePage = Profile;
        //constructor(public authservice: AuthService) {
        //console.log(authservice.uid);
        //}
    }
    return TabPage;
}());
TabPage = __decorate([
    Component({
        selector: 'page-tab-page',
        templateUrl: 'tab-page.html',
    })
], TabPage);
export { TabPage };
//# sourceMappingURL=tab-page.js.map