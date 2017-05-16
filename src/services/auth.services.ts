import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

    constructor(public auth: AngularFireAuth) { }

    createUser(email: string, password: string) {
        return this.auth.auth.createUserWithEmailAndPassword(email, password);
    }

    getUser(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.auth.authState.subscribe((data) => {
                if (data === null)
                    reject({message: "Please login."});
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