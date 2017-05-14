import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class authService {

    //user: any = {};

    constructor(public auth: AngularFireAuth) {
    }

    // setUser(user: any) {
    //     this.auth.authState.subscribe((data)=>{
    //         console.log('>>', data);
    //     });
    //     this.user = user;
    // }

    getUser(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.auth.authState.subscribe((data) => {
                console.log(data);
                if (data === null)
                    reject('Login Needed');
                resolve(data);
            });
        })

    }

    loginWithGoogle() {
        return this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    logout() {
        return this.auth.auth.signOut();
    }
}