import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-firebase-object-page',
  templateUrl: 'firebase-object-page.html',
})
export class FirebaseObjectPage {

  persons: FirebaseObjectObservable<any[]>;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    afdb: AngularFireDatabase, afAuth: AngularFireAuth) {

    this.persons = afdb.object('/p4/p6');
  }

  save(newName: string) {
    this.persons.set({ name: newName });
  }

  update(newAge: string) {
    this.persons.update({ age: newAge });
  }

  delete() {
    this.persons.remove();
  }
}
