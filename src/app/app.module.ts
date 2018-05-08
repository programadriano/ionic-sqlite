import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';
import { LoginProvider } from '../providers/login/login';
import { LoginPage } from '../pages/login/login';

import { SQLite } from '@ionic-native/sqlite'
import { DatabaseProvider } from '../providers/database/database';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SobrePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SobrePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,  
    SQLite,
    DatabaseProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginProvider,
    DatabaseProvider
  ]
})
export class AppModule { }
