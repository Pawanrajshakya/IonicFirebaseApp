import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";

@Injectable()
export class AuthService {

    private _isValid: boolean = false;
    private _message: string = "";

    uid: string = null;
    email: string = null;
    displayName: string = null;
    photoURL: string = null;

    constructor(public auth: AngularFireAuth) {
        this.getUser().then().catch(() => {
            this.clearProperties();
        });
    }

    private validate(...args): boolean {
        args.forEach((data) => {
            console.log(data.trim.length === 0);
            if (data.trim.length === 0)
                return false;
        });
        return true;
    }

    createUser(email: string, password: string) {
        return new Promise((resolve, reject) => {
            return this.auth.auth.createUserWithEmailAndPassword(this.email, password)
        });
    }

    status(): boolean {
        this.auth.authState.subscribe((data) => {
            return (data === null) ? false : true;
        }, (error) => {
            return false;
        });
        return false;
    }

    getUser(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.auth.authState.subscribe((data) => {
                console.log('1.0', data);
                if (data === null) {
                    this.clearProperties();
                    reject({ message: "Please login." });
                } else {
                    this.uid = data.uid;
                    this.displayName = data.displayName;
                    this.photoURL = data.photoURL;
                    this.email = data.email;
                    resolve(data);
                }
            }, (error) => {
                this.clearProperties();
                reject(error);
            });
        })
    }


    getUserObservable(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            this.auth.authState.subscribe((data) => {
                console.log('11.0', data);
                if (data === null) {
                    this.clearProperties();
                } else {
                    this.uid = data.uid;
                    this.displayName = data.displayName;
                    this.photoURL = data.photoURL;
                    this.email = data.email;
                }
                observer.next(data);
            });
        });
    }


    loginWithGoogle(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((data) => {
                console.log('1.2', data);
                resolve(true);
            }).catch((error) => {
                reject(false);
            });
        });
    }

    loginWithPassword(email: string, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.auth.auth.signInWithEmailAndPassword(email, password).then((data) => {
                resolve(true);
            }).catch((error) => {
                reject(false);
            });
        });
    }

    logout() {
        return this.auth.auth.signOut().then(() => {
            this.clearProperties();
        });
    }

    clearProperties() {
        this.uid = null;
        this.displayName = null;
        this.photoURL = null;
        this.email = null;
    }
}