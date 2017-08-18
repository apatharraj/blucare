import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PromoPage } from '../promo/promo';
import { SameDayQAPage } from '../same-day-q-a/same-day-q-a';
import { ConfirmationPage } from '../confirmation/confirmation';
import { AppTermsConditionProvider } from './terms-condition-service'

/**
 * Generated class for the TermsConditionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-terms-condition',
  templateUrl: 'terms-condition.html',
})

export class TermsConditionPage {

  public responsereturn;
  public modal;
  constructor(public navCtrl: NavController, public navParams: NavParams, public termsservice: AppTermsConditionProvider) {
  }

  onpromoPage() {


    let bookingDetails = JSON.parse(localStorage.getItem('bookDetails'));
    let previousSlotID = "";
    let rescheduleFlag = localStorage.getItem("isRescheduled");
    let getCurrentDateSplit = new Date().getMonth().toString().split('');
    let currentMonth = new Date().getMonth() + 1;
    let currentDate;
    if (getCurrentDateSplit.length == 1) {
      currentDate = "0" + currentMonth + "-" + new Date().getDate() + "-" + new Date().getFullYear();
    } else {
      currentDate = currentMonth + "-" + new Date().getDate() + "-" + new Date().getFullYear();
    }
    if (rescheduleFlag) {
      previousSlotID = localStorage.getItem("availabilitySlotID");
    }
    this.modal = {
      "userId": localStorage.getItem("ID_login"),
      "doctorId": bookingDetails.doctorId,
      "date": currentDate,
      "availabilitySlotID": bookingDetails.id,
      "promoCode": "",
      "bookedDate": bookingDetails.date,
      "fromTime": bookingDetails.fromTime,
      "toTime": bookingDetails.toTime,
      "modifiedDate": currentDate,
      "usersId": localStorage.getItem("ID_login"),
      "doctorsId": bookingDetails.doctorId,
      "doctorName": localStorage.getItem("UserDoctorName"),
      "appointmentType": parseInt(localStorage.getItem("ScheduledType")),
      "type": parseInt(localStorage.getItem("ScheduledType")),
      "isRescheduled": rescheduleFlag,
      "appointmentDetails": {
        "previousSlotID": previousSlotID,
        "bookedDate": bookingDetails.date,
        "fromTime": bookingDetails.fromTime,
        "toTime": bookingDetails.toTime,
        "hospitalName": localStorage.getItem("DoctorhospitalName"),
        "miles": localStorage.getItem("DoctorMiles"),
        "latlng": {
          "lat": localStorage.getItem("DoctorLAT"),
          "lng": localStorage.getItem("DoctorLONG")
        },
        "photoUrl": localStorage.getItem("DoctorPhotoUrl"),
        "BasicInfo": {
          "lastName": "",
          "middleName": "",
          "firstName": localStorage.getItem('userName_login'),
          "patientDOB": "1990-02-02",
          "CellPhone": "9124845784",
        },
        "ClinicappointmentType": {
          "ClinicappointmentType": [localStorage.getItem('inAppType')]
        },
        "healthIssue": {
          "healthIssue": [localStorage.getItem('commonHealthIssues')]
        }
      }
    };
    console.log(this.modal);
    if (rescheduleFlag == "false") {
      this.termsservice.Createappoitment(this.modal).subscribe(responce => {
        if (responce.response) {
          this.responsereturn = responce.response;
          console.log(this.responsereturn);
          localStorage.setItem("isRescheduled", "false");

          localStorage.setItem("ScheduledDetailed", JSON.stringify(this.responsereturn));
          this.navCtrl.push(ConfirmationPage);

        } else {

        }
      }, error => {
      });
    } else {
      let Details = JSON.parse(localStorage.getItem("ScheduledDetailed"));
      this.modal.id = Details.id;
      this.termsservice.updateappoitment(this.modal).subscribe(responce => {
        if (responce.data.response) {
          this.responsereturn = responce.data.response;
          console.log(this.responsereturn);
          localStorage.setItem("isRescheduled", "false");
          localStorage.setItem("ScheduledDetailed", JSON.stringify(this.responsereturn));
          // $scope.show_loading = false;
          // $state.go('Confirmation');
          this.navCtrl.push(ConfirmationPage);

        } else {
          // $scope.show_loading = false;
        }
      }, error => {
        // $scope.show_loading = false;
      });
    }


  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsConditionPage');
  }

}





