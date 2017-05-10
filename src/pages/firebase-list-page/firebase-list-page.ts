import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-firebase-list-page',
  templateUrl: 'firebase-list-page.html',
})
export class FirebaseListPage {

  items: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , afdb: AngularFireDatabase
    , afAuth: AngularFireAuth) {
    this.items = afdb.list('/list');
  }

  addItem(newText: string) {
    this.items.push({ text: newText, value: "" });
  }

  updateItem(key: string, newText: string, newValue: string) {
    this.items.update(key, { text: newText, value: newValue });
  }

  deleteItem(key: string) {
    this.items.remove(key);
  }

  deleteEverything() {
    this.items.remove();
  }
}
