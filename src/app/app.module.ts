import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {DatePipe} from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgCalendarModule } from 'ionic2-calendar';

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { AvilablePcpPage } from '../pages/avilable-pcp/avilable-pcp';
import { OnDemandPcpPage } from '../pages/on-demand-pcp/on-demand-pcp';
import { TermsConditionPage } from '../pages/terms-condition/terms-condition';
import { PromoPage } from '../pages/promo/promo';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { SameDayQAPage } from '../pages/same-day-q-a/same-day-q-a';
import { PcpCalendarPage,GroupsPipe } from '../pages/pcp-calendar/pcp-calendar';
import { OnDemandPcpCalendarPage } from '../pages/on-demand-pcp-calendar/on-demand-pcp-calendar';
import { BlucareServicesProvider } from '../providers/blucare-services/blucare-services';
import { avilablepcpServices } from '../pages/avilable-pcp/avilablepcpService';
import { pcpcalendarServices } from '../pages/pcp-calendar/pcp-calendar-service';
import { ondemandpcpcalendarservice } from '../pages/on-demand-pcp-calendar/on-demand-pcp-calendar-service';
import { onDemandServices } from '../pages/on-demand-pcp/on-demand-pcp-services';
import { DashboardServices } from '../pages/dashboard/dashboardService';
import { Loginservice } from '../pages/login/login-service';
import { RatingModule } from "ng2-rating";
import { Service } from '../providers/service';
import { AppointmentTypePage } from '../pages/appointment-type/appointment-type';
import { CommonHealthIssuesPage } from '../pages/common-health-issues/common-health-issues';
import { UserSchedulePage } from '../pages/user-schedule/user-schedule';
import { CallNumber } from '@ionic-native/call-number';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Geolocation } from '@ionic-native/geolocation';
import {MenuPage} from '../pages/menu/menu';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { AppTermsConditionProvider } from '../pages/terms-condition/terms-condition-service';
import { FiltersPipe } from '../pipes/filters/filters';
// import { SortOderBy } from "../pages/avilable-pcp/avilable-pcp-pipe";


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ForgotpasswordPage,
    DashboardPage,
    AvilablePcpPage,
    OnDemandPcpPage,
    TermsConditionPage,
    PromoPage,
    ConfirmationPage,
    SameDayQAPage,
    PcpCalendarPage,
      GroupsPipe,
    OnDemandPcpCalendarPage,
    AppointmentTypePage,
    CommonHealthIssuesPage,
    UserSchedulePage,
    MenuPage,
    FiltersPipe
    // SortOderBy,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgCalendarModule,
    RatingModule,
    Ng2OrderModule,
    IonicModule.forRoot(MyApp, [BlucareServicesProvider])
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ForgotpasswordPage,
    DashboardPage,
    AvilablePcpPage,
    OnDemandPcpPage,
    TermsConditionPage,
    PromoPage,
    ConfirmationPage,
    SameDayQAPage,
    PcpCalendarPage,
    OnDemandPcpCalendarPage,
    AppointmentTypePage,
    CommonHealthIssuesPage,
    UserSchedulePage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BlucareServicesProvider,
    avilablepcpServices,
    pcpcalendarServices,
    ondemandpcpcalendarservice,
    onDemandServices,
    Loginservice,
    DatePipe,
    Service,
    DashboardServices,
    CallNumber,
    LocalNotifications,
    Geolocation,
    AppTermsConditionProvider,
    AppTermsConditionProvider
  ]
})
export class AppModule { }
