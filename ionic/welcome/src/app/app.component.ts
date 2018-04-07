import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
  
  rootPage:any = WelcomePage;
  // userDetails: any;// public variable
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
/*     const data = JSON.parse(localStorage.getItem('userData')); // decl get from db
    this.userDetails = data.userData;  */// con abject
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


 
}
