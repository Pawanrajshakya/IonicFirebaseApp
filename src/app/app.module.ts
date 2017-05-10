import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabPage } from '../pages/tab-page/tab-page';
import { FirebaseObjectPage } from '../pages/firebase-object-page/firebase-object-page';
import { FirebaseListPage } from '../pages/firebase-list-page/firebase-list-page';

import {HttpModule} from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyA5VnxFiVaYkmZ9FDsCVEyu6hzFc30LV4I",
  authDomain: "fir-sampleappdb.firebaseapp.com",
  databaseURL: "https://fir-sampleappdb.firebaseio.com",
  projectId: "fir-sampleappdb",
  storageBucket: "fir-sampleappdb.appspot.com",
  messagingSenderId: "527144487973"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabPage,
    FirebaseObjectPage,
    FirebaseListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabPage,
    FirebaseObjectPage,
    FirebaseListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
