import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {
  CallsDetailsPage,
  CallsPage,
  ChatsPage,
  SoundsPage,
  TabsPage
} from "../pages/pages.index";

@NgModule({
  declarations: [
    MyApp,
    CallsDetailsPage,
    CallsPage,
    ChatsPage,
    SoundsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CallsDetailsPage,
    CallsPage,
    ChatsPage,
    SoundsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
