import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Character } from '../../interfaces/character.interface';

/**
 * Generated class for the CallsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calls-details',
  templateUrl: 'calls-details.html',
})
export class CallsDetailsPage {
  character: Character;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getCharacter();
  }

  getCharacter() {
    this.character = this.navParams.get('character');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallsDetailsPage');
  }

}
