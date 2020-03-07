import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AlertService } from 'src/app/services/alert.service';
import {MDCDialog} from '@material/dialog';

@Component({
  selector: 'app-delete-vender',
  templateUrl: './delete-vender.component.html',
  styleUrls: ['./delete-vender.component.scss']
})
export class DeleteVenderComponent implements OnInit {
  allVendore:any=[];
  dialog:any;
  modifyId:any=null;
  p:number=1;
  constructor(private location:Location,private apiservice:ApiServiceService,private alert:AlertService) { }

  ngOnInit() {
    this.dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
    this.getAllVendor();
  }

  confirmDelete(id){
    this.dialog.open();
    this.modifyId= id;
  }

  getAllVendor(){
    this.apiservice.GET('getAllVendor').subscribe((dataVendoe:any)=>{
        this.allVendore = dataVendoe.data;
    },error=>{
      console.log(JSON.stringify(error));
    })
  }
  Cancel(){
    this.modifyId= null;
  }
  confirm(){
   
    this.deleteVendore(this.modifyId);
  }

  deleteVendore(id){
    var obj = {
        vendor_id:id,
        status:"3"
    }
    this.apiservice.POST('deleteVendor',obj).subscribe((blockData:any)=>{
      this.alert.onSuccess(blockData.message,'DISMISS');
      this.getAllVendor();
      this.modifyId= null;
      this.dialog.close();
    },error=>{
      this.modifyId= null;
      this.alert.onError('Please try again later','DISMISS');
    })
  }
  back(){
    this.location.back();
  }

}
