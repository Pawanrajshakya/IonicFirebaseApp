import { Component } from '@angular/core';
import { Shopping } from '../shopping/shopping';
import { Profile } from '../profile/profile';

import { FirebaseObjectPage } from '../firebase-object-page/firebase-object-page'
import { FirebaseListPage } from '../firebase-list-page/firebase-list-page'

@Component({
  selector: 'page-tab-page',
  templateUrl: 'tab-page.html',
})
export class TabPage {

  homePage: Component = Shopping;
  objectPage: Component = FirebaseObjectPage;
  listPage: Component = FirebaseListPage;
  profilePage: Component = Profile;

}
