webpackJsonp([1],{

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_modal__ = __webpack_require__(623);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalPageModule", function() { return LoginModalPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginModalPageModule = (function () {
    function LoginModalPageModule() {
    }
    return LoginModalPageModule;
}());
LoginModalPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_modal__["a" /* LoginModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_modal__["a" /* LoginModalPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login_modal__["a" /* LoginModalPage */]
        ]
    })
], LoginModalPageModule);

//# sourceMappingURL=login-modal.module.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgotpassword_forgotpassword__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_blucare_services_blucare_services__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_service__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModalPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the LoginModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginModalPage = (function () {
    function LoginModalPage(navCtrl, navParams, modal, view, service, loginService, http, alertCtrl, loadCtrl, formBuilder, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
        this.service = service;
        this.loginService = loginService;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.formBuilder = formBuilder;
        this.app = app;
        // Login Credintials
        this.userLoginModel = {
            "userInfo": 'Augusta',
            "password": 'password'
        };
        // login() {
        //    this.navCtrl.setRoot (Dashboard);
        // }
        this.loginShow = false;
        this.todo = this.formBuilder.group({
            emailField: ['Augusta', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(45)])],
            passwordField: ['password', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(45)])],
        });
    }
    LoginModalPage.prototype.logForm = function () {
        console.log(this.todo.value.emailField);
        localStorage.setItem("userName_login", this.todo.value.emailField);
    };
    //Forgot Password PopUp
    LoginModalPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit',
                    role: 'submit',
                    handler: function (data) {
                        // let username = document.getElementById("usernames");
                        // this.userEmail = username;
                        var inputValue = document.getElementById('augusta').value;
                        console.log(inputValue);
                        if (inputValue !== "") {
                            var alert1 = _this.alertCtrl.create({
                                title: 'Your password',
                            });
                        }
                        else {
                            var alert1 = _this.alertCtrl.create({
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
    };
    //Login Details
    LoginModalPage.prototype.submitLogin = function () {
        var _this = this;
        this.loginService.loginUser(this.userLoginModel)
            .subscribe(function (data) {
            //this.navCtrl.setRoot(DashboardPage);
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
            console.log(data);
            localStorage.setItem('ID_login', data.response.id);
            _this.view.dismiss();
            console.log(data);
        }, function (error) {
            //alert("Error loggin in:"+error.message);
            var alert2 = _this.alertCtrl.create({
                title: 'Error Login',
                message: 'Invalid Username Or Password',
                buttons: ['Ok']
            });
            alert2.present();
        });
        var loader = this.loadCtrl.create({
            dismissOnPageChange: true,
        });
        loader.present().then(function () {
            _this.loginService.loginUser(_this.userLoginModel)
                .subscribe(function (res) {
                _this.userLoginModel = res;
            });
            loader.dismiss();
        });
    };
    LoginModalPage.prototype.rediectToForgotPasswordPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
        //  let registermodal = this.modalCtrl.create(Forgotpassword);
        // registermodal.present(); 
    };
    LoginModalPage.prototype.loginButton = function () {
        this.loginShow = (!this.loginShow);
    };
    LoginModalPage.prototype.closeModal = function () {
        document.getElementById("loginPop").removeAttribute("hidden");
        this.view.dismiss();
    };
    LoginModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginModalPage');
    };
    return LoginModalPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], LoginModalPage.prototype, "content", void 0);
LoginModalPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login-modal',template:/*ion-inline-start:"D:\Projects\BlueCareApp\src\pages\login-modal\login-modal.html"*/'<ion-content>\n  <ion-buttons class="inverted-arrow">\n    <button ion-button (click)="closeModal()"><img src="../assets/images/u56.png"></button>\n  </ion-buttons>\n  <ion-list class="loginpage-bg">\n    <form [formGroup]="todo" (ngSubmit)="logForm()">\n      <ion-item>\n        <ion-icon class="profile-icon" item-left><img src="../assets/images/u68.png" width="30px" height="30px" /></ion-icon>\n        <!--<ion-input type="text" formControlName="title"></ion-input>-->\n        <ion-input type="text" formControlName="emailField" placeholder="Policy No/ Email/ User Name" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon class="profile-icon" item-left><img src="../assets/images/u72.png" width="30px" height="30px" /></ion-icon>\n        <!--<ion-textarea formControlName="description"></ion-textarea>-->\n        <ion-input type="password" formControlName="passwordField" placeholder="Password" required></ion-input>\n      </ion-item>\n      <ion-buttons left>\n        <button class="forgot" ion-button (click)="presentPrompt()">Forgot password? </button>\n      </ion-buttons>\n      <ion-buttons right> \n        <button class="login" ion-button (click)="submitLogin()" type="submit" [disabled]="!todo.valid"> \n                   <img src="../assets/images/u84.png" width="50px" height="50px" />\n                </button>\n      </ion-buttons>\n    </form>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\BlueCareApp\src\pages\login-modal\login-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_blucare_services_blucare_services__["a" /* BlucareServicesProvider */],
        __WEBPACK_IMPORTED_MODULE_8__login_login_service__["a" /* Loginservice */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* App */]])
], LoginModalPage);

//# sourceMappingURL=login-modal.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map