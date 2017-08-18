import { Injectable,ViewChild } from '@angular/core';
import { Http , HttpModule, Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Content } from 'ionic-angular';
import {Observable} from 'rxjs/RX'
import 'rxjs/Rx';
import {FormBuilder,FormGroup,Validators,FormControl} from "@angular/forms";
//Common Service 

import {Service} from '../../providers/service';


@Injectable()
export class Loginservice {
  data:any;
  @ViewChild(Content) content: Content;
  constructor(public http: Http, public service:Service) {
    console.log('Hello Loginservice Provider');
             this.service.getHeaders();          
  }


      loginUser(userLoginModel):any{
        const body=JSON.stringify(userLoginModel);
          return this.http.post(this.service.getBaseUrl + 'users/login',body,{headers:this.service.getHeaders()})
            .map((data:Response)=>data.json())
            .catch(this.handleError);
      } 

    private handleError(error:any){
       console.log(error);
       return Observable.throw(error.json());
      }

}


