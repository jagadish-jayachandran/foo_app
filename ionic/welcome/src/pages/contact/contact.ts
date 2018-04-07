import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  users: any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getUsers();
  }
  add(){
    this.navCtrl.push('AdduserPage');
  }
  getUsers() {
    this.restProvider.getUsers()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }
}
