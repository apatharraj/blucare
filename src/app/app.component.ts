import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Service } from '../providers/service';
import { Http } from '@angular/http';

import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { UserSchedulePage } from '../pages/user-schedule/user-schedule';
import {PcpCalendarPage} from '../pages/pcp-calendar/pcp-calendar';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;
  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public service: Service,
    public http: Http) {

    //Menu 
    this.initializeApp();
    this.platform = platform;
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: DashboardPage },
      { title: 'Schedule Appointment ', component: UserSchedulePage },
      { title: 'Logout', component: LoginPage },
    ];

  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}

