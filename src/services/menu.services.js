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
import { AuthService } from './auth.services';
import { Observable } from "rxjs/Observable";
import sidemenu from '../data/sidemenu';
import mainmenu from '../data/mainmenu';
var MenuService = (function () {
    function MenuService(authService) {
        this.authService = authService;
    }
    MenuService.prototype.getObserable = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.authService.getUserObservable().subscribe(function (data) {
                if (data !== null) {
                    observer.next(mainmenu);
                }
                else {
                    observer.next(sidemenu);
                }
            });
        });
    };
    return MenuService;
}());
MenuService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthService])
], MenuService);
export { MenuService };
//# sourceMappingURL=menu.services.js.map