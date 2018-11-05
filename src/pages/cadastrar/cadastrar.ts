import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmePage } from '../filme/filme';

/**
  copyright
  Gustavo Nakaura RA: 816253667
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmePage');
  }
  filme(){
    this.navCtrl.push(FilmePage);
  }

}
