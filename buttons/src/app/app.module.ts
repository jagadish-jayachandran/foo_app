import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AngularFireModule } from 'angularfire2/angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { HttpModule } from "@angular/http";
import { EditPage } from '../pages/edit/edit';

const config = {
  apiKey: "AIzaSyCBv5jYAJVzSPHmuP3t-xnFo2oIEj-kVgs",
  authDomain: "buttons-d90c9.firebaseapp.com",
  databaseURL: "https://buttons-d90c9.firebaseio.com",
  projectId: "buttons-d90c9",
  storageBucket: "buttons-d90c9.appspot.com",
  messagingSenderId: "450334877984"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EditPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
