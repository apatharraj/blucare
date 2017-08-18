import { Component, ViewChild } from '@angular/core';
import {
  IonicPage, NavController, NavParams, ModalController, ViewController, AlertController,
  LoadingController, App
} from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { Content } from 'ionic-angular';
import { Http, HttpModule, Headers } from '@angular/http';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';





import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { DashboardPage } from '../dashboard/dashboard';

import { BlucareServicesProvider } from '../../providers/blucare-services/blucare-services';
import { Loginservice } from '../login/login-service';
/**
 * Generated class for the LoginModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-modal',
  templateUrl: 'login-modal.html',
})
export class LoginModalPage {
  private todo: FormGroup;
  data: any;
  @ViewChild(Content) content: Content;


  //Login Details

  emailField: any;
  passwordField: any;
  userEmail: any;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modal: ModalController,
    public view: ViewController,
    public service: BlucareServicesProvider,
    public loginService: Loginservice,
    public http: Http,
    private alertCtrl: AlertController,
    private loadCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public app: App) {

    this.todo = this.formBuilder.group({
      emailField: ['Augusta', Validators.compose([Validators.minLength(5), Validators.maxLength(45)])],
      passwordField: ['password', Validators.compose([Validators.minLength(5), Validators.maxLength(45)])],
    });
  }

  logForm() {
    console.log(this.todo.value.emailField)
    localStorage.setItem("userName_login", this.todo.value.emailField);
  }
  //Forgot Password PopUp
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Enter Email Address',
      inputs: [
        {
          placeholder: 'Email Id',
          type: 'email', 
          id: 'augusta'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          role: 'submit',
          handler: data => {
            // let username = document.getElementById("usernames");
            // this.userEmail = username;
            let inputValue = (<HTMLInputElement>document.getElementById('augusta')).value;
            console.log(inputValue);
            if (inputValue !== "") {
              
              let alert1 = this.alertCtrl.create({
                title: 'Your password',
              });
            } else {
              let alert1 = this.alertCtrl.create({
                title: 'Please enter email !!',
                buttons: ['Ok']
              });
              alert1.present();
            }
          }

        }
      ],
    });

    alert.present();
  }


  // Login Credintials

  userLoginModel = {
    "userInfo": 'Augusta',
    "password": 'password'
  }

  //Login Details

  submitLogin() {
   
    this.loginService.loginUser(this.userLoginModel)

      .subscribe(data => {
        //this.navCtrl.setRoot(DashboardPage);
        this.app.getRootNav().setRoot(DashboardPage)
        console.log(data);
        localStorage.setItem('ID_login',data.response.id);
        this.view.dismiss();
        console.log(data);
      }, error => {
        //alert("Error loggin in:"+error.message);
        let alert2 = this.alertCtrl.create({
          title: 'Error Login',
          message: 'Invalid Username Or Password',
          buttons: ['Ok']
        });
        alert2.present()
        
      });
    let loader = this.loadCtrl.create({
      dismissOnPageChange: true,

    });
    loader.present().then(() => {
      this.loginService.loginUser(this.userLoginModel)
        .subscribe(res => {
          this.userLoginModel = res;
        });
      loader.dismiss();
    });


  }

  rediectToForgotPasswordPage() {
    this.navCtrl.setRoot(ForgotpasswordPage);
    //  let registermodal = this.modalCtrl.create(Forgotpassword);
    // registermodal.present(); 
  }

  // login() {
  //    this.navCtrl.setRoot (Dashboard);
  // }

  loginShow = false;
  loginButton() {
    this.loginShow = (!this.loginShow)
  }
  closeModal() {
    document.getElementById("loginPop").removeAttribute("hidden");
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginModalPage');
  }

}
