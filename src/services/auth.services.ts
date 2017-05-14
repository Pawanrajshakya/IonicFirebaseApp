import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

    //user: any = {};

    constructor(public auth: AngularFireAuth) {
    }

    createUser(email: string, password: string) {
        return this.auth.auth.createUserWithEmailAndPassword(email, password);
    }

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

    loginWithPassword(email: string, password: string) {
        return this.auth.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.auth.auth.signOut();
    }
}