import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BlucareServicesProvider } from '../../providers/blucare-services/blucare-services';

@Injectable()
export class DashboardServices {

    constructor(private http: Http, public blucareservices: BlucareServicesProvider) {

    }
    OndashboardGetApp(userId: any) {
        return this.http.get(this.blucareservices.getBlueCareData() + 'appointments/getAppointments?userId=' + userId, 
        { headers: this.blucareservices.getHeaderData() }).map(result => result.json());
    }
    OndashboardCancelApp(obj: any){
         return this.http.put(this.blucareservices.getBlueCareData() + 'appointments', 
        { headers: this.blucareservices.getHeaderData() }).map(result => result.json());
    }
    OndeleteAppointment(id: any){
         return this.http.delete(this.blucareservices.getBlueCareData() + 'appointments/' + id, 
        { headers: this.blucareservices.getHeaderData() }).map(result => result.json());
    }
}