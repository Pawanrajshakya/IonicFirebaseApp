import { Component } from '@angular/core';
import { Shopping } from '../shopping/shopping';
import { Login } from '../login/login';
import { Profile } from '../profile/profile';

import { FirebaseObjectPage } from '../firebase-object-page/firebase-object-page'
import { FirebaseListPage } from '../firebase-list-page/firebase-list-page'

//import { AuthService } from '../../services/auth.services';


@Component({
  selector: 'page-tab-page',
  templateUrl: 'tab-page.html',
})
export class TabPage {

  homePage: Component = Shopping;
  objectPage: Component = FirebaseObjectPage;
  listPage: Component = FirebaseListPage;
  profilePage: Component = Profile;

  //constructor(public authservice: AuthService) {
    //console.log(authservice.uid);
  //}


}
