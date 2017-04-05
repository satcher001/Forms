import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{ ShoppingListService } from '../services/ShoppingListService';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShoppingListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShoppingListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ShoppingListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
