import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

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
    this.items = afdb.list('/category');
  }

  addItem(text: string) {
    this.items.push({ text: text, isActive: true });
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
