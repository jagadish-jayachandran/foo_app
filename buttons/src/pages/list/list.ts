import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  shoppingItems: FirebaseListObservable<any[]>;

  constructor(public afd: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
   {
      this.shoppingItems = this.firebaseProvider.getShoppingItems();
      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  updateItem(id) {
    this.afd.list('/shoppingItems/').update(this.afd.list.name,
      {
        name: this.afd.list.name
      }).then(  this.navCtrl.pop());
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }
}
