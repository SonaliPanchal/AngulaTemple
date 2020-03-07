import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { FilterService } from 'src/app/services/filter.service';
import * as moment from "moment";

@Component({
  selector: 'app-leave-tracker',
  templateUrl: './leave-tracker.component.html',
  styleUrls: ['./leave-tracker.component.scss']
})
export class LeaveTrackerComponent implements OnInit {
  leaveTrackerData: any = [];
  tempLeaveData: any = [];
  allEmployee: any = [];
  allLeaveType: any = [];
  dataObj: any = {
    "apply_leave_id": null,
    "from_date": null,
    "to_date": null,
    "leave_type_id": null,
    "reason_for_leave": null,
    "priest_id": null,
    "number_of_days": null,
    "status": null,
    "leave_type_name": null,
    "priest_name": null,
    "leave_coverage":null
  }
  keys:any=[];
  config: any;
  p: number = 1;

  constructor(private location: Location, private apiservice: ApiServiceService, private filter: FilterService) { }

  ngOnInit() {
    const e_id = new MDCSelect(document.querySelector('.e_id'));
    const e_name = new MDCSelect(document.querySelector('.e_name'));
    const l_type = new MDCSelect(document.querySelector('.l_type'));
    const e_d = new MDCSelect(document.querySelector('.e_d'));
    const s_d = new MDCSelect(document.querySelector('.s_d'));
    const l_cover = new MDCSelect(document.querySelector('.l_cover'));
    this.getleaveTracker();
    this.getAllEmployee();
    this.getAllLeaveType();
    // this.config = {
    //   itemsPerPage: 5,
    //   currentPage: 1,
    //   totalItems: this.tempLeaveData.length
    // };
  }

  back() {
    this.location.back();
  }

  getleaveTracker() {
    this.apiservice.GET('leaveTracker').subscribe((leaveData: any) => {
      if(leaveData.data){
        this.leaveTrackerData = leaveData.data;
        this.tempLeaveData = leaveData.data;
      }
      this.keys = Object.keys(this.dataObj)
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  getAllEmployee() {
    this.apiservice.GET('getAllEmployee').subscribe((dataVal: any) => {
      this.allEmployee = dataVal.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  getAllLeaveType() {
    this.apiservice.GET('getAllLeavesTypes').subscribe((dataVal: any) => {
      this.allLeaveType = dataVal.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  ApplyFilter(data, keyField) {
    if(keyField=='priest_id')
      data = parseInt(data)
    this.tempLeaveData = JSON.parse(JSON.stringify(this.leaveTrackerData));
    this.tempLeaveData = this.filter.applyFilter(data, this.tempLeaveData, keyField);
    this.blank(keyField,this.tempLeaveData);
  }

  blank(keyField,data){
    this.keys.forEach(element => {
        this.dataObj[element] = data[0][element];
    })
  }
  pageChanged(event){
    this.config.currentPage = event;
  }


}
