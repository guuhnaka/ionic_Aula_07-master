import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
  copyright
  Gustavo Nakaura RA: 816253667
 */

@IonicPage()
@Component({
  selector: 'page-destino',
  templateUrl: 'destino.html',
})
export class DestinoPage {
  public filme = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private movieProvider: MovieProvider) {
    
  }

  ionViewDidLoad() {
    this.movieProvider.getMovie().subscribe(
      data => {
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
      this.filme = objeto_retorno.results;
      console.log(objeto_retorno);
      }, error => {
      console.log(error);
      }
      )
 }

}
