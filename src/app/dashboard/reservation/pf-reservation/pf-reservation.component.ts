import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MDCCheckbox } from '@material/checkbox';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import { MDCRadio } from '@material/radio';
import { ApiServiceService } from 'src/app/services/api-service.service';
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-pf-reservation',
  templateUrl: './pf-reservation.component.html',
  styleUrls: ['./pf-reservation.component.scss']
})
export class PfReservationComponent implements OnInit, AfterViewInit {
  pujaAtHome: any = [];
  pujaAtTemple: any = [];
  facilityName: any = [];
  priestName: any = [];
  checkVal: any = 1;
  maxDate = new Date();
  pujaType: any = 'home';
  home: boolean = false;
  temple: boolean = true;
  disabledFacility: boolean = true;
  selectedCheck: boolean = true;
  total_invoice: any = 0;
  disablePujaTemple: boolean = true;
  disablePujaHome: boolean = false;
  disabledTemple: any = '';
  disabledHome: any = '';
  selectedDate: any = new Date();
  priestFees: any = null;
  dateToday: any = new Date();
  dataObj: any = {
    "puja_id": null,
    "puja_type": null,
    "priest_id": null,
    "dateAndTime": null,
    "priest_fee": null,
    "facility_type": null,
    "facility_id": null,
    "from_time": null,
    "to_time": null,
    "date": null,
    "facility_fee": null
  }

  constructor(private alert: AlertService, private cdr: ChangeDetectorRef, private location: Location, private router: Router, private apiservice: ApiServiceService) { }

  ngOnInit() {
    this.dataObj.puja_type = 0;
    const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
    const secondCheckbox = new MDCCheckbox(document.querySelector('.secondCheckbox'));
    const p_type = new MDCSelect(document.querySelector('.p_type_home'));
    // }else{
    // const p_typetemp = new MDCSelect(document.querySelector('.p_typetemp'));
    // }
    const p_name = new MDCSelect(document.querySelector('.p_name'));
    const dateTime = new MDCTextField(document.querySelector('.dateTime'));
    const fees = new MDCTextField(document.querySelector('.fees'));
    const radio = new MDCRadio(document.querySelector('.mdc-radio'));
    const homeradio = new MDCRadio(document.querySelector('.homeradio'));
    const invAmt = new MDCTextField(document.querySelector('.invAmt'));
    const TimeSlot_ = new MDCTextField(document.querySelector('.TimeSlot_'));
    const select = new MDCSelect(document.querySelector('.mdc-select'));
    const POSREf = new MDCTextField(document.querySelector('.pff'));
    if (!this.disabledFacility) {
      const p_type1 = new MDCSelect(document.querySelector('.p_type1'));
      const fess2 = new MDCTextField(document.querySelector('.fess2'));
      const pickTimeTo = new MDCTextField(document.querySelector('.pickTimeTo'));
      const pickTime = new MDCTextField(document.querySelector('.pickTime'));
      // const dateSlotTime = new MDCTextField(document.querySelector('.dateSlotTime'));
    }
    this.getPujaAtTemple();
    this.getPujaAtHome();
    this.getAllFacility();
    this.getpriestName();
    // this.getTotalInvoice();
  }

  enteringFeesFacility(val) {
    this.dataObj.facility_fee = Number(val);
    this.total_invoice = parseFloat(this.dataObj.priest_fee ? this.dataObj.priest_fee : 0) + parseFloat(this.dataObj.facility_fee ? this.dataObj.facility_fee : 0);
  }
  enteringFees(val) {
    // if(this.dataObj.priest_fee)
    this.dataObj.priest_fee = Number(val);
    this.total_invoice = parseFloat(this.dataObj.priest_fee ? this.dataObj.priest_fee : 0) + parseFloat(this.dataObj.facility_fee ? this.dataObj.facility_fee : 0);
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  back() {
    this.location.back();
  }

  getPujaAtHome() {
    this.apiservice.GET('getAllPuja').subscribe((datHomePuja: any) => {
      this.pujaAtHome = datHomePuja.data;
      // this.disabledHome = this.pujaAtHome[0].puja_id;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  getPujaAtTemple() {
    this.apiservice.asyncGET('getAllPuja').subscribe((datTemplePuja: any) => {
      this.pujaAtTemple = datTemplePuja.data;
      // this.disabledTemple = this.pujaAtTemple[0].puja_id;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  getPriestFee(pujaId) {
    this.dataObj.priest_fee = null;
    this.apiservice.asyncPOST('getPujaFees', { puja_id: pujaId }).subscribe((dataPujaFees: any) => {
      this.dataObj.priest_fee = dataPujaFees.data ? dataPujaFees.data[0].fees : null;
      this.enteringFees(this.dataObj.priest_fee)
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  getFacilityFees(facilityId) {
    this.dataObj.facility_fee = null;
    this.dataObj.from_time = null;
    this.dataObj.to_time = null;
    this.apiservice.asyncPOST('getFacilityTimeFee', { facility_id: facilityId }).subscribe((dataPujaFees: any) => {
      this.dataObj.facility_fee = dataPujaFees.data ? dataPujaFees.data[0].fees : null;
      this.dataObj.from_time = dataPujaFees.data ? dataPujaFees.data[0].start_time : null;
      // this.dataObj.from_time = moment(this.dataObj.from_time)
      this.dataObj.to_time = dataPujaFees.data ? dataPujaFees.data[0].end_time : null;
      // this.dataObj.to_time = moment(this.dataObj.to_time)
      this.enteringFeesFacility(this.dataObj.facility_fee);
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  getAllFacility() {
    this.apiservice.GET('allFacility').subscribe((facilityName: any) => {
      this.facilityName = facilityName.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }
  getpriestName() {
    this.apiservice.GET('allPriest').subscribe((priestName: any) => {
      this.priestName = priestName.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  reservation(data) {
    this.apiservice.POST('addPriestBooking', data).subscribe((dataBoking: any) => {
      console.log(dataBoking.data);
    }, error => {
      console.log(JSON.stringify(error));
    })
  }


  requireFacility(event) {
    console.log(event.target.checked);
    if (event.target.checked) {
      this.dataObj.facility_type = 1;
      this.disabledFacility = false;
    } else {
      this.dataObj.facility_type = 0;
      this.disabledFacility = true;
    }
  }

  changeRadioButton(event, type) {
    // if(event.target.checked)
    if (type == 'puja_home') {
      this.disablePujaHome = false;
      this.disablePujaTemple = true;
      this.disabledTemple = null;
      this.dataObj.puja_type = 0;
    }
    if (type == 'puja_temple') {
      this.disablePujaHome = true;
      this.disablePujaTemple = false;
      this.disabledHome = null;
      this.dataObj.puja_type = 1;
    }
  }


  getPriestBooking(data) {
    this.dataObj.date = moment(this.selectedDate).format('DD-MM-YYYY');
    this.dataObj.dateAndTime = moment(this.dataObj.dateAndTime).format('DD-MM-YYYY hh:mm a');
    // this.dataObj.to_time=moment(this.dataObj.to_time).format('hh:mm a');
    // this.dataObj.from_time=moment(this.dataObj.from_time).format('hh:mm a');
    console.log(this.dataObj);
    this.apiservice.POST('addPriestBooking', this.dataObj).subscribe((dataVal: any) => {
      this.alert.onSuccess(dataVal.message, 'DISMISS');
      this.apiservice.reloadRoute('/resrvation/pf_reservation');
    }, error => {
      this.alert.onError('Booking Not Completed, Please try agin later!', 'DISMISS');
    })
  }
}
