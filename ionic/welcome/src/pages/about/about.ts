import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html' 

})
export class AboutPage {
  

  constructor(public navCtrl: NavController, public platform: Platform,
     public alertCtrl: AlertController) {
     }
    }

