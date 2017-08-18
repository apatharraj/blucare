import { Injectable } from '@angular/core';
import { Http   } from '@angular/http';
import 'rxjs/add/operator/map';
import { BlucareServicesProvider } from '../../providers/blucare-services/blucare-services';

@Injectable()
export class  onDemandServices {

  constructor(private http: Http, public blucareservices: BlucareServicesProvider) {
   
  }
 onDemandPcp(modal){
  return this.http.post(this.blucareservices.getBlueCareData()+'recentlyVisiteds/getRecentlyVistedDoctors',{modal},{headers:this.blucareservices.getHeaderData()}).map(result=>result.json());
 }
  
}