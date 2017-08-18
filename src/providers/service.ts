import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class Service {
  data:any;
  constructor(public http: Http) {

 
}//Constructor



getHeaders() {
   let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('accept', 'application/json');
     headers.append('x-ibm-client-id', 'a4f41cbc-2b74-4484-b3a7-78512296c486');
     headers.append('x-ibm-client-secret', 'sU6fE2oC8tL4nA7tI3sB6hQ3iY3gK8sB6vH0yT8uL4jE6vG7uE');

       return headers;
} 

  
      getBaseUrl =
     'https://api.us.apiconnect.ibmcloud.com/eharrisusibmcom-augustademos/sb/api/';

   
} //Class










