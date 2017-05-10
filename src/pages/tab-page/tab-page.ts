import { Component } from '@angular/core';
import {HomePage} from '../home/home';
import {FirebaseObjectPage} from '../firebase-object-page/firebase-object-page'
import {FirebaseListPage} from '../firebase-list-page/firebase-list-page'

@Component({
  selector: 'page-tab-page',
  templateUrl: 'tab-page.html',
})
export class TabPage {

  homePage: Component = HomePage;
  objectPage: Component = FirebaseObjectPage;
  listPage: Component = FirebaseListPage;
  syncPage: Component = HomePage;
}
