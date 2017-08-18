import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BlucareServicesProvider } from '../../providers/blucare-services/blucare-services';

@Injectable()
export class avilablepcpServices {

    constructor(private http: Http, public blucareservices: BlucareServicesProvider) {

    }
    onAvilablepcpRecentVisitedDoctors(modal) {
        return this.http.post(this.blucareservices.getBlueCareData() + 'recentlyVisiteds/getRecentlyVistedDoctors', 
        { modal }, { headers: this.blucareservices.getHeaderData() }).map(result => result.json());
    }

     onAvilablepcpRecomededDoctors(modal) {
        return this.http.post(this.blucareservices.getBlueCareData() + 'doctors/getRecommendedDoctors', 
        { modal }, { headers: this.blucareservices.getHeaderData() }).map(result => result.json());
    }

    OnRecomededJson() {
        return this.http.get("../assets/RecommededDocotor.json"
    , { headers: this.blucareservices.getHeaderData() }).map(result => result.json());
    }
}