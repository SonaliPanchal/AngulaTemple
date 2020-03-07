import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { FilterService } from 'src/app/services/filter.service';
import * as moment from 'moment';


@Component({
  selector: 'app-pf-booking-tracker',
  templateUrl: './pf-booking-tracker.component.html',
  styleUrls: ['./pf-booking-tracker.component.scss']
})
export class PfBookingTrackerComponent implements OnInit {
  priestTracker: any = [];
  tempPriestTrac: any = [];
  allPriest: any = [];
  allFacility: any = [];
  toDate: any;
  fromDate: any;
  dateTime: any;
  filterdObj: any = {
    "dateAndTime": null,
    "priest_fee": null,
    "facility_required": null,
    "priest_choice": null,
    "facility_booking_id": null,
    "facility_timeslot_from": null,
    "facility_timeslote_to": null,
    "facility_date": null,
    "facility_fee": null,
    "facility_name": null,
    "puja_name": null,
    "priest_name": null
  }
  keys: any = [];
  config: any;
  p: number = 1;


  constructor(private location: Location, private apiservice: ApiServiceService, private filter: FilterService) { }

  ngOnInit() {
    const p_c = new MDCSelect(document.querySelector('.p_c'));
    const p_name = new MDCSelect(document.querySelector('.p_name'));
    const f_d = new MDCSelect(document.querySelector('.f_d'));
    const pbookingTime = new MDCSelect(document.querySelector('.pbookingTime'));
    const f_r = new MDCSelect(document.querySelector('.f_r'));
    const f_n = new MDCSelect(document.querySelector('.f_n'));
    const f_t = new MDCSelect(document.querySelector('.f_t'));
    this.getTrackerDetail();
    this.config = {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: this.tempPriestTrac.length
    };
    // this.getAllFacility();
    // this.getAllPriest();
  }

  back() {
    this.location.back();
  }

  getTrackerDetail() {
    this.apiservice.GET('getAllPriestBooking').subscribe((dataTracker: any) => {
      this.priestTracker = dataTracker.results;
      this.tempPriestTrac = dataTracker.results;
      this.keys = Object.keys(this.filterdObj)
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  // getAllPriest(){
  //   this.apiservice.GET('allPriest').subscribe((dataVal:any)=>{
  //     this.allPriest = dataVal.data;
  //   },error=>{
  //     console.log(JSON.stringify(error));
  //   })
  // }

  // getAllFacility(){
  //   this.apiservice.GET('allFacility').subscribe((dataVal:any)=>{
  //     this.allFacility = dataVal.data;
  //   },error=>{
  //     console.log(JSON.stringify(error));
  //   })
  // }

  ApplyFilter(data, keyField) {
    // console.log(typeof (data),keyField);
    if (keyField == "facility_required")
      data = parseInt(data)
    // this.blank(keyField);
    this.tempPriestTrac = JSON.parse(JSON.stringify(this.priestTracker));
    this.tempPriestTrac = this.filter.applyFilter(data, this.tempPriestTrac, keyField);
    this.blank(keyField, this.tempPriestTrac);
  }

  // ApplyFilterDate(data,keyField){
  //   data=moment(data).format('DD-MM-YYYY')
  //   console.log(data);
  //   this.blank(keyField);
  //   this.tempPriestTrac = JSON.parse(JSON.stringify(this.priestTracker));
  //   this.tempPriestTrac = this.filter.applyFilter(data,this.tempPriestTrac,keyField);
  // }
  // ApplyFilterToFrom(data,date1,keyField){
  //   this.fromDate=moment(this.fromDate).format('hh:mm A')
  //   this.toDate=moment(this.toDate).format('hh:mm A')
  //   var toFrom = this.fromDate+'to'+this.toDate;
  //   console.log(toFrom);
  //   this.blank(keyField);
  //   this.tempPriestTrac = JSON.parse(JSON.stringify(this.priestTracker));
  //   this.tempPriestTrac = this.filter.applyFilter(toFrom,this.tempPriestTrac,keyField);
  // } 
  // ApplyFilterDateOwl(data,keyField){
  //   data=moment(this.dateTime).format('DD-MM-YYYY hh:mm A')
  //   console.log(data);
  //   this.blank(keyField);
  //   this.tempPriestTrac = JSON.parse(JSON.stringify(this.priestTracker));
  //   this.tempPriestTrac = this.filter.applyFilter(data,this.tempPriestTrac,keyField);
  // }

  getPriestChoice(data) {
    if (data)
      return data.replace(/_/g, ' ');
  }

  blank(keyField, data) {
    this.keys.forEach(element => {
      if (element == 'facility_timeslote_to') {
        this.filterdObj[element] = data[0][element] + ' to ' + data[0].facility_timeslot_from;
      } else {
        this.filterdObj[element] = data[0][element];
      }
    })
  }

  pageChanged(event) {
    console.log('event', event)
    this.config.currentPage = event;
    // 	this.router.navigate([''], { queryParams: { page: newPage } });
  }
}
