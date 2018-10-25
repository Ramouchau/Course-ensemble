import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {ClientItem} from "../../interfaces/list-interfaces";

/**
 * Generated class for the AddItemModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item-modal',
  templateUrl: 'add-item-modal.html',
})
export class AddItemModalPage {

  item: ClientItem = {name:"", quantity:1}
  constructor( public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
    console.log(params);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemModalPage');
  }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    add()
    {
      console.log("add <===")
      this.viewCtrl.dismiss({item: this.item})
    }
}
