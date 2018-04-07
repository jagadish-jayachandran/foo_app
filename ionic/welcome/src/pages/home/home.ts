import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userDetails: any;
  userPostData = { "user_id": "", "token": "" };
  public responseData: any;
  public dataSet: any;
  constructor(public navCtrl: NavController, public app: App, public authServiceProvider: AuthServiceProvider) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.getFeed();
  }
  getFeed() {
    this.authServiceProvider.postData(this.userPostData, 'feed').then((result) => {this.responseData = result;
        if (this.responseData.feedData) {
          this.dataSet = this.responseData.feedData;
          console.log(this.dataSet);
        }
        else {
          console.log("No access getFeed");
        }
      }, (err) => {
        console.log("No access getFeed error");
      });
  }
  // logout() {
  //   const root = this.app.getRootNav();
  //   root.popToRoot();
  // }
  backToWelcome() {
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout() {
    //Api Token Logout

    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }
}
