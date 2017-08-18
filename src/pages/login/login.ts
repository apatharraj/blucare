import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController , ViewController ,AlertController,
        LoadingController } from 'ionic-angular';
import { CommonModule } from '@angular/common';  
import { Content } from 'ionic-angular';
import { Http , HttpModule, Headers} from '@angular/http';
import {FormBuilder,FormGroup,Validators,FormControl} from "@angular/forms";
import 'rxjs/add/operator/map';
import {NgForm} from '@angular/forms'; 


import {ForgotpasswordPage} from '../forgotpassword/forgotpassword';
import {DashboardPage} from '../dashboard/dashboard';       

//Service Files

import {BlucareServicesProvider} from '../../providers/blucare-services/blucare-services';
import {Loginservice} from './login-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any;
  @ViewChild(Content) content: Content;

  


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modal: ModalController,
              public viewCtrl:ViewController,
              public service:BlucareServicesProvider,
              public loginService:Loginservice,
              public http:Http ,
              private alertCtrl:AlertController,
              private loadCtrl:LoadingController ) {
  }


 openModal() {
// this.showPop=false;
 document.getElementById("loginPop").setAttribute("hidden","");
    const myModal = this.modal.create('LoginModalPage');
    myModal.present();
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
