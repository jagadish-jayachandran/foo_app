import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  shoppingItems: FirebaseListObservable<any[]>;
  newItem = '';

 
  constructor(public afd: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    {
      this.shoppingItems = this.firebaseProvider.getShoppingItems();
           }
  }
  updateItem(id) {
    this.afd.list('/shoppingItems/').update(this.afd.list.name,
      {
        name: this.afd.list.name
      }).then(uPerson => { this.navCtrl.pop(); },
      error => { console.log(error); });

  }
 
}
