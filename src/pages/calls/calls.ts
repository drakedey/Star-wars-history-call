import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Character } from '../../interfaces/character.interface';
import { PERSONAJES } from '../../data/personajes.data';
import { CallsDetailsPage } from '../pages.index';

@IonicPage()
@Component({
  selector: 'page-calls',
  templateUrl: 'calls.html',
})
export class CallsPage {
  characters: Character[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getCharacters();
  }

  getCharacters() {
    this.characters = PERSONAJES.slice(0);
  }

  goToCallDetail(character: Character) {
    this.navCtrl.push(CallsDetailsPage, { character });
  }

}
