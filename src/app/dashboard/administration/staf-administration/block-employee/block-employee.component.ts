import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AlertService } from 'src/app/services/alert.service';
import {MDCDialog} from '@material/dialog';

@Component({
  selector: 'app-block-employee',
  templateUrl: './block-employee.component.html',
  styleUrls: ['./block-employee.component.scss']
})
export class BlockEmployeeComponent implements OnInit {
  allVendore:any=[];
  dialog:any;
  modifyId:any=null;
  p:number=1;
  constructor(private location:Location,private apiservice:ApiServiceService,private alert:AlertService) { }

  ngOnInit() {
    this.dialog = new MDCDialog(document.querySelector('#blockVendor'));
    this.getAllVendor();
  }

  back(){
    this.location.back();
  }
  confirmBlock(id){
    this.dialog.open();
    this.modifyId= id;
  }

  getAllVendor(){
  
    this.apiservice.GET('getAllEmployee').subscribe((dataVendoe:any)=>{
        this.allVendore = dataVendoe.data;
    },error=>{
      console.log(JSON.stringify(error));
    })
  }
  Cancel(){
    this.modifyId= null;
  }
  confirm(){
    this.blockVendore(this.modifyId);
  }

  blockVendore(id){
    var obj = {
        id:id,
        status:"2"
    }
    this.apiservice.POST('blockEmployee',obj).subscribe((blockData:any)=>{
      this.alert.onSuccess(blockData.message,'DISMISS');
      this.getAllVendor();
      this.modifyId= null;
      this.dialog.close();
    },error=>{
      this.modifyId= null;
      this.alert.onError('Please try again later','DISMISS');
    })
  }

}
