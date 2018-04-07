import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
  loading: any;
  newsData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider, public loadingCtrl:  LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: `
  <ion-spinner ></ion-spinner>`
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }
  getdata() {
    this.httpProvider.getJsonData().subscribe(
      result => {
        this.newsData = result.data.children;
        console.log("Success : " + this.newsData);
      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        console.log('getData completed');
      }
    );
  }
}
