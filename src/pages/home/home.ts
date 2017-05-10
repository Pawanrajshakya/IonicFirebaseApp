import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Observable } from 'rxjs/Rx';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;// Observable<FirebaseListObservable.User>

  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public navCtrl: NavController, public afdb: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.items = afdb.list('/message', {
      query: {
        limitToLast: 50
      }
    });

    

    this.user = this.afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  send(desc: string) {
    console.log(this.items);
    this.items.push({ message: desc });
    this.msgVal = '';
  }

  delete(item) {
    console.log(item);
    this.items.remove(item.$key);
  }
}
