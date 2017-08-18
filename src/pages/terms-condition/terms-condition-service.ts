import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BlucareServicesProvider } from '../../providers/blucare-services/blucare-services';

/*
  Generated class for the AppTermsConditionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppTermsConditionProvider {

  constructor(public http: Http,public blucareservices: BlucareServicesProvider) {
    console.log('Hello AppTermsConditionProvider Provider');
  }

     Createappoitment(model: any) {
        return this.http.post(this.blucareservices.getBlueCareData() + 'appointments/createAppointment', model,
        { headers: this.blucareservices.getHeaderData() }).map(result => result.json());
    }
    updateappoitment(model: any){
         return this.http.post(this.blucareservices.getBlueCareData() + 'appointments/updateAppointment', model,
        { headers: this.blucareservices.getHeaderData() }).map(result => result.json());
    }

}
