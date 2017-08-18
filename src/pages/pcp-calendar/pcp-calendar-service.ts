import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BlucareServicesProvider } from '../../providers/blucare-services/blucare-services';

@Injectable()
export class pcpcalendarServices {

    constructor(private http: Http, public blucareservices: BlucareServicesProvider) {

    }
    onPcpCalendar(modal) {
        return this.http.post(this.blucareservices.getBlueCareData() + 'doctorsAvailabilities/getDoctorsAvailabilities',  {modal}, { headers: this.blucareservices.getHeaderData() }).map(result => result.json());
    }
}