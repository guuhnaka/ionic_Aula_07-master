import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CadastrarPage } from '../pages/cadastrar/cadastrar';

import { LancamentosPage } from '../pages/lancamentos/lancamentos';
import{PopularidadePage} from '../pages/popularidade/popularidade'
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { GeneroPageModule } from '../pages/genero/genero.module';
import { DestinoPageModule } from '../pages/destino/destino.module';
import { FilmePageModule } from '../pages/filme/filme.module';


@NgModule({
  declarations: [
    MyApp,
    CadastrarPage,
    PopularidadePage,
    LancamentosPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    GeneroPageModule,
    FilmePageModule,
    DestinoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastrarPage,
    PopularidadePage,
    LancamentosPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
