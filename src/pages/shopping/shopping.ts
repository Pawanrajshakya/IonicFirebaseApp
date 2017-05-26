import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Transaction } from '../../models/transaction';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-shopping',
  templateUrl: 'shopping.html',
})
export class Shopping {

  transactions: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {
    this.transactions = db.list('/category');
    //this.transactions.remove();
    //this.addItem();
  }

  addItem() {
    this.transactions.push(new Transaction(new Date().toLocaleDateString(), "desc", "dest", "cate1", 1,100,"Card", "Any"));;
  }

  // updateItem(key: string, newText: string, newValue: string) {
  //   this.items.update(key, { text: newText, value: newValue });
  // }

  // deleteItem(key: string) {
  //   this.items.remove(key);
  // }

  deleteEverything() {
    this.transactions.remove();
  }
}
