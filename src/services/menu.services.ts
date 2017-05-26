import { Injectable } from '@angular/core';
import { AuthService } from './auth.services';

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";


import sidemenu from '../data/sidemenu';
import mainmenu from '../data/mainmenu';


@Injectable()
export class MenuService {

    constructor(public authService: AuthService) {}

    getObserable(): Observable<Array<{ title: string, description: string, component: any, icon: string, active: boolean }>> {
        return Observable.create((observer: Observer<Array<{ title: string, description: string, component: any, icon: string, active: boolean }>>) => {
            this.authService.getUserObservable().subscribe((data) => {
                if (data !== null) {
                    observer.next(mainmenu);
                } else {
                    observer.next(sidemenu);
                }
            });
        })
    }
}