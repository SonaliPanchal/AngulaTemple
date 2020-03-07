import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AlertService } from 'src/app/services/alert.service';
import {MDCDialog} from '@material/dialog';
import { MDCTextField } from '@material/textfield';
import * as moment from 'moment';

@Component({
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.scss']
})
export class ModifyEmployeeComponent implements OnInit {
  allVendore:any=[];
  dialog:any;
  modifyId:any=null;
  modifyVendor:any={};
  startDate:any;
  endDate:any;
  p:number=1;
  maxDate:any= new Date();
  
  constructor(private location:Location,private apiservice:ApiServiceService,private alert:AlertService) { }

  ngOnInit() {
    this.dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
    const Employee_ID = new MDCTextField(document.querySelector('.Employee_ID'));
    const Employee_Name = new MDCTextField(document.querySelector('.Employee_Name'));
    const Assignment_Start = new MDCTextField(document.querySelector('.Assignment_Start'));
    const Assignment_End = new MDCTextField(document.querySelector('.Assignment_End'));
    const Employee_Type = new MDCTextField(document.querySelector('.Employee_Type'));
    const Role = new MDCTextField(document.querySelector('.Role'));
    const Group_ID = new MDCTextField(document.querySelector('.Group_ID'));
    this.getAllVendor();
  }
  back(){
    this.location.back();
  }

  editEmployee(id,vendor){
    this.dialog.open();
    this.modifyId= id;
    this.modifyVendor = JSON.parse(JSON.stringify(vendor));
    this.endDate = new Date(this.modifyVendor.assignment_end);
    this.startDate = new Date(this.modifyVendor.assignment_start);
  }

  getAllVendor(){
    this.modifyId = null;
    this.apiservice.GET('getAllEmployee').subscribe((dataVendoe:any)=>{
        this.allVendore = dataVendoe.data;
    },error=>{
      console.log(JSON.stringify(error));
    })
  }

  Cancel(){
    this.modifyId= null;
    this.modifyVendor={};
  }
  confirm(){
    this.modifyId= null;
    this.updateVendor();
  }

  updateVendor(){
    this.modifyVendor.assignment_end = moment( this.endDate).format('DD-MM-YYYY');
    this.modifyVendor.assignment_start = moment( this.startDate).format('DD-MM-YYYY');
    this.apiservice.POST('updateEmployee',this.modifyVendor).subscribe((blockData:any)=>{
      this.alert.onSuccess(blockData.message,'DISMISS');
      this.modifyVendor ={};
      this.getAllVendor();
      this.dialog.close();
    },error=>{
      this.modifyVendor ={};
      this.alert.onError('Please try again later','DISMISS');
    })
  }
}
