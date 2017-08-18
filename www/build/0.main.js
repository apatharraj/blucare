webpackJsonp([0],{

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(624);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = (function () {
    function ModalPageModule() {
    }
    return ModalPageModule;
}());
ModalPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]
        ]
    })
], ModalPageModule);

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
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
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModalPage = (function () {
    function ModalPage(navCtrl, navParams, view, localNotifications) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.localNotifications = localNotifications;
    }
    ModalPage.prototype.schedule = function () {
        this.alarmTime = new Date();
        this.alarmTime.setMinutes(this.alarmTime.getMinutes() + 2);
        var Details = JSON.parse(localStorage.getItem("ScheduledDetailed"));
        console.log();
        this.localNotifications.schedule({
            id: Details.id,
            at: this.alarmTime,
            data: "You have a schedule",
            title: "Appointment on " + Details.date + " at " + Details.appointmentDetails.fromTime,
            sound: null
        });
    };
    ModalPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad yModalPage');
    };
    return ModalPage;
}());
ModalPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modal',template:/*ion-inline-start:"D:\Projects\BlueCareApp\src\pages\modal\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n  <ion-buttons class="inverted-arrow">\n    <button ion-button (click)="closeModal()"><img src="../assets/images/u56.png"></button>\n  </ion-buttons>\n  <ion-item>\n    <ion-buttons>\n      <button ion-button (click)="schedule()">\n        <ion-icon name="notifications"></ion-icon><br />\n        <p>Alert me <br />30 mins before</p>\n        </button>\n    </ion-buttons>\n    <ion-buttons>\n      <button ion-button><ion-icon name="calendar"></ion-icon><br /><p>Add to Calendar</p></button>\n    </ion-buttons>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\BlueCareApp\src\pages\modal\modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */]])
], ModalPage);

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map