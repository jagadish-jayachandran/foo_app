import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from "../first/first";
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http/';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userrecipedata = [];
  cards: any;
  dataSet: any;
  // responseData: {};
  // userPostData: {"id":"","language":""};

  constructor(public http: Http, public httpm: HttpModule,public navCtrl: NavController, public authServiceProvider: AuthserviceProvider) {
    // const data = JSON.parse(localStorage.getItem('http://mobileindian.org/demo/news/android/languagelist.php '));
    // this.dataSet=data;

    //another way of calling json values
    // this.http.get('http://mobileindian.org/demo/news/android/languagelist.php')
    //     .subscribe(data => {
    //     this.dataSet = data;
    // console.log(this.dataSet);
    //   });

    //this.getData();

    //Another way to get php pdo ionic angular
//     this.http.get('http://localhost/admin-recipick/api/Main/get_user_recipe_data').success(function(response){
//     this.userrecipedata = response;
// });
    this.getLocalData()
  }
add(){
 this.navCtrl.push(FirstPage);
}
edit(){
  this.navCtrl.push('EditpagePage');
}
  // getData() {
  //   this.http.get('http://mobileindian.org/demo/news/android/languagelist.php')
  //     .subscribe(data => {
  //       this.dataSet = data;
  //       //console.log(this.dataSet);
  //     });
  // }
  getLocalData() {
    this.http.get('http://mobileindian.org/demo/news/android/languagelist.php/?language')
    .map(res => res.json()).subscribe(res => {
      this.cards = res.cards;
      // this.cards.rd = this.cards[Math.floor(Math.random() * this.cards.length)];
      console.log(this.cards);
    },
      (err) => {
        alert("failed loading json data");
      })
  }
}


