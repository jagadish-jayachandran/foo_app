import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../../pages/home/home';


@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }

  getShoppingItems() {
    return this.afd.list('/shoppingItems/');
  }

  add(name) {
    this.afd.list('/shoppingItems/').push(name);
  }

  removeItem(id) {
    this.afd.list('/shoppingItems/').remove(id);
  }

}