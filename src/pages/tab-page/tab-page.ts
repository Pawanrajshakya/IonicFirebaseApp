import { Component } from '@angular/core';
import { Shopping } from '../shopping/shopping';
import { Login } from '../login/login';

import { FirebaseObjectPage } from '../firebase-object-page/firebase-object-page'
import { FirebaseListPage } from '../firebase-list-page/firebase-list-page'

@Component({
  selector: 'page-tab-page',
  templateUrl: 'tab-page.html',
})
export class TabPage {

  homePage: Component = Login;
  objectPage: Component = FirebaseObjectPage;
  listPage: Component = FirebaseListPage;
  syncPage: Component = Shopping;
}
