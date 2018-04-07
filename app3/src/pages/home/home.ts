import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from "../first/first";
import { EditpagePage } from '../editpage/editpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
add(){
 this.navCtrl.push(FirstPage);
}
edit(){
  this.navCtrl.push(EditpagePage);
}
}


