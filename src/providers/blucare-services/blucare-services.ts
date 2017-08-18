import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BlucareServicesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BlucareServicesProvider {

  constructor(public http: Http) {
    console.log('Hello BlucareServicesProvider Provider');
  }

  getBlueCareData() {
    // console.log(this.http.get('https://api.us.apiconnect.ibmcloud.com/augorg-augspc/sb/api'));


    // this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=10$sort=hot')



    // this.http.get('https://api.us.apiconnect.ibmcloud.com/augorg-augspc/sb/api')
    // .map(res => res.json())
    // .subscribe(data => {
    //   console.log(data);
    // })

    // OLD API

    // return 'https://api.us.apiconnect.ibmcloud.com/augorg-augspc/sb/api/';

    return 'https://api.us.apiconnect.ibmcloud.com/eharrisusibmcom-augustademos/sb/api/';

  }

  // OLD API

  // getHeaderData() {
  //   let headers = new Headers()
  //   headers.append('Accept', 'application/json');
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('x-ibm-client-id', 'b520d30a-c516-4026-b6dc-e92a366ce289');
  //   headers.append('x-ibm-client-secret', 'P7mY0wQ0fN5mL3oY4vS5xU3rB1pO2vW7oH0pH6uN6gB3bP8uB7');

  //   return headers;
  // }
  getHeaderData() {
    let headers = new Headers()
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('x-ibm-client-id', 'a4f41cbc-2b74-4484-b3a7-78512296c486');
    headers.append('x-ibm-client-secret', 'sU6fE2oC8tL4nA7tI3sB6hQ3iY3gK8sB6vH0yT8uL4jE6vG7uE');

    return headers;
  }

}
