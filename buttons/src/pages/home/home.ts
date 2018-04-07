import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { EditPage } from '../edit/edit';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  shoppingItems: FirebaseListObservable<any[]>;
  newItem = '';

  add() {
    this.firebaseProvider.add(this.newItem);
  }
  constructor(public afd: AngularFireDatabase, public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.shoppingItems = this.firebaseProvider.getShoppingItems();
  }

  view(){
    this.navCtrl.push(ListPage);
  }
  edit(){
    this.navCtrl.push(EditPage);
  }

}
