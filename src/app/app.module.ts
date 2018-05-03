import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RockPage } from '../pages/rock/rock';
import { MetalPage } from '../pages/metal/metal';
import { HiphopPage } from '../pages/hiphop/hiphop';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlbumsProvider } from '../providers/albums/albums';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RockPage,
    MetalPage,
    HiphopPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RockPage,
    MetalPage,
    HiphopPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlbumsProvider
  ]
})
export class AppModule {}
