import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
  copyright
  Gustavo Nakaura RA: 816253667
 */

@IonicPage()
@Component({
  selector: 'page-popularidade',
  templateUrl: 'popularidade.html',
  providers: [
    MovieProvider
  ]
})
export class PopularidadePage {
  
  public lista_filmes = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams,private movieProvider: MovieProvider) {
  }

  ionViewDidLoad() {
    this.movieProvider.getPopularMovies().subscribe(
    data => {
    const response = (data as any);
    const objeto_retorno = JSON.parse(response._body);
    this.lista_filmes = objeto_retorno.results;
    console.log(objeto_retorno);
    }, error => {
    console.log(error);
    }
    )
    }
}
