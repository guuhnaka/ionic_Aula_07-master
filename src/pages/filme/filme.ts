import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';


/**
  copyright
  Gustavo Nakaura RA: 816253667
 */

@IonicPage()
@Component({
  selector: 'page-filme',
  templateUrl: 'filme.html',
  providers: [
    MovieProvider
  ]
})
export class FilmePage {
  public lista_filmes = new Array<any>();
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private movieProvider: MovieProvider) {
  }

  filme() {
    this.movieProvider.getMovie().subscribe(
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
