import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AlertService } from 'src/app/services/alert.service';
import {MDCDialog} from '@material/dialog';
import { MDCTextField } from '@material/textfield';

@Component({
  selector: 'app-modify-vender',
  templateUrl: './modify-vender.component.html',
  styleUrls: ['./modify-vender.component.scss']
})
export class ModifyVenderComponent implements OnInit {
  allVendore:any=[];
  dialog:any;
  modifyId:any=null;
  modifyVendor:any={};
  p:number=1;
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

  editVendor(id,vendor){
    this.dialog.open();
    this.modifyId= id;
    this.modifyVendor = JSON.parse(JSON.stringify(vendor));
  }

  getAllVendor(){
    this.modifyId = null;
    this.apiservice.GET('getAllVendor').subscribe((dataVendoe:any)=>{
        this.allVendore = dataVendoe.data;
    },error=>{
      console.log(JSON.stringify(error));
    })
  }
  Cancel(){
    this.modifyId= null;
    this.modifyVendor={};
  }
  confirm(data){
    this.modifyId= null;
    this.updateVendor();
  }

  updateVendor(){
    this.apiservice.POST('updateVendor',this.modifyVendor).subscribe((blockData:any)=>{
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
