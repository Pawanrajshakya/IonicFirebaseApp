import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

//pages decleration goes here
import { TabPage } from '../pages/pages';
import { Shopping } from '../pages/shopping/shopping';
import { Login } from '../pages/login/login';
import { Profile } from '../pages/profile/profile';
import { Home } from '../pages/home/home';

//firebase decleration goes here
import { FirebaseObjectPage } from '../pages/firebase-object-page/firebase-object-page';
import { FirebaseListPage } from '../pages/firebase-list-page/firebase-list-page';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//service decleration goes here
import { AuthService } from '../services/auth.services';
import { ToastService } from '../services/toast.service';
import { MenuService } from '../services/menu.services';

//firebase configuration
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
    TabPage,
    FirebaseObjectPage,
    FirebaseListPage,
    Shopping,
    Login,
    Profile,
    Home
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
    TabPage,
    FirebaseObjectPage,
    FirebaseListPage,
    Shopping,
    Login,
    Profile,
    Home
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    ToastService,
    MenuService
  ]
})
export class AppModule { }
