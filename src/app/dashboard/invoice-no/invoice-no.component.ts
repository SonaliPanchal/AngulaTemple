import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MDCTextField } from '@material/textfield';
import * as moment from 'moment';

@Component({
  selector: 'app-invoice-no',
  templateUrl: './invoice-no.component.html',
  styleUrls: ['./invoice-no.component.scss']
})
export class InvoiceNoComponent implements OnInit {
  p:number=1;
  inventoryDetail:any=[];
  po_no:any=null;
  dateVal:any=moment().format('DD-MM-YYYY');
  constructor(private router:Router,private route:ActivatedRoute,private location:Location,private apiservice:ApiServiceService,private alert:AlertService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.po_no = params['po_no'] ;//atob(params['id']);//;
    });
    this.getAllInventory(this.po_no);
    const invoice = new MDCTextField(document.querySelector('.invoice'));
    const date = new MDCTextField(document.querySelector('.date'));
  }

  back(){
    this.location.back();
  }

  getAllInventory(po){
    this.apiservice.POST('getInvoiceModule',{po_no:po}).subscribe((dataVal:any)=>{
      this.inventoryDetail = dataVal.data;
    },error=>{
      console.log(JSON.stringify(error));
      this.alert.onError('Inventory not found!','DISMISS')
    })
  }

  getInvoiceTotal(){
    var sum = 0;
    if(this.inventoryDetail.length){
      this.inventoryDetail.forEach(element => {
        // console.log(element.po_total);
        sum+=(element.amount?element.amount:0)
      });
    }
    return sum;
  }

}
