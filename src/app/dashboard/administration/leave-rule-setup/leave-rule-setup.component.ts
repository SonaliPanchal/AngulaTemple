import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-leave-rule-setup',
  templateUrl: './leave-rule-setup.component.html',
  styleUrls: ['./leave-rule-setup.component.scss']
})
export class LeaveRuleSetupComponent implements OnInit {
  allsetUpdata:any=[];
  p:number=1;
  constructor(private location:Location,private apiservice:ApiServiceService) { }

  ngOnInit() {
    this.getLeaveRuleSetUp();
  }

  back(){
    this.location.back();
  }

  getLeaveRuleSetUp(){
    this.apiservice.GET('getAllLeaveRulesSetUp').subscribe((leaveData:any)=>{
      this.allsetUpdata = leaveData.data;
    },error=>{
      console.log(JSON.stringify(error));
    })
  }

}
