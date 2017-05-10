import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-tab-page',
  templateUrl: 'tab-page.html',
})
export class TabPage {

  homePage: Component = HomePage;
  searchPage: Component = HomePage;
  aboutPage: Component = HomePage;
  syncPage: Component = HomePage;
}
