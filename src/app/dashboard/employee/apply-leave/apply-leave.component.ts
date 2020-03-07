import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import { ApiServiceService } from 'src/app/services/api-service.service';
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  allpriest: any = [];
  yearPicker: any;
  allLeave: any = [];
  leaveObj: any = {};
  leaveYear: any = [];
  leaveCount: any = 12;
  sickType: any = 0;
  usedAnuualLeave: any = 0;
  leaveBalance: any = 0;
  LOP: any = 0;
  leaveType: any = [];
  maxDate:any = new Date();
  constructor(private location: Location, private apiservice: ApiServiceService,private alert:AlertService) { }

  ngOnInit() {
    const fDate = new MDCTextField(document.querySelector('.fDate'));
    const toDate = new MDCTextField(document.querySelector('.toDate'));
    const LeaveType = new MDCSelect(document.querySelector('.LeaveType'));
    const reasonForLeave = new MDCTextField(document.querySelector('.reasonForLeave'));
    const Subsitute = new MDCSelect(document.querySelector('.Subsitute'));
    const numberOfDays = new MDCTextField(document.querySelector('.numberOfDays'));
    const viewDetail = new MDCSelect(document.querySelector('.viewDetail'));
    this.getPriest();
    this.getLeaveTracker();
    this.getLeaveType();

  }

  back() {
    this.location.back();
  }

  getPriest() {
    this.apiservice.GET('allPriest').subscribe((priestData: any) => {
      this.allpriest = priestData.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  postLeave(data) {
    data.from_date = moment(data.from_date).format('DD-MM-YYYY');
    data.to_date = moment(data.to_date).format('DD-MM-YYYY');
    this.apiservice.POST('addApplyLeave', data).subscribe((dataLeave: any) => {
      this.alert.onSuccess(dataLeave.message,'DISMISS');
      this.apiservice.reloadRoute('/employee/apply_leave');
      // console.log(dataLeave)
    }, error => {
      this.alert.onError('leave not applied, Please try again later!','DISMISS');
      console.log(JSON.stringify(error));
    })
  }

  getLeaveTracker() {
    this.apiservice.GET('leaveTracker').subscribe((dataval: any) => {
      this.allLeave = dataval.data;
      this.selectYear();
    }, error => {
      console.log(JSON.stringify(error));
    })
  }


  selectYear() {
    this.allLeave.map((key, val) => {
      if (this.leaveYear.indexOf(moment(val.created).format('YYYY')) == -1) {
        this.leaveYear.push(moment(val.created).format('YYYY'))
        // this.leaveObj.total_leave=
      }
    })
  }

  selectedyear(event) {
    // console.log(event)
    this.usedAnuualLeave = 0;
    let self = this;
    this.allLeave.forEach(function (val) {
      if ((moment(val.created).format('YYYY')) == event) {
        self.usedAnuualLeave++;
        self.checkLeaveType(val.leave_type_id);
      }
    })
  }

  checkLeaveType(id) {
    this.sickType = 0;
    this.leaveBalance = 0;
    var self = this;
    this.leaveType.forEach(function (dataVal) {
      if (dataVal.leave_type_id == id) {
        self.sickType++;
      }
    })
    this.leaveBalance = this.leaveCount - this.usedAnuualLeave ;
  }

  getLeaveType() {
    this.apiservice.GET('getAllLeavesTypes').subscribe((dataval: any) => {
      this.leaveType = dataval.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }
}
