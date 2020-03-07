import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AlertService } from 'src/app/services/alert.service';
import * as moment from'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-payment',
  templateUrl: './other-payment.component.html',
  styleUrls: ['./other-payment.component.scss']
})
export class OtherPaymentComponent implements OnInit {
  allPaymentMode: any = [];
  allCheckPayable: any = [];
  allCodes: any = [];
  allCostCenters: any = [];
  preparedDate: any = new Date();
  tableData: any = [];
  NOpurchase: any = {
    "invoice_number": null,
    "invoice_date": null,
    "payment_to": null,
    "payment_due_date": null,
    "mode_of_payment": null,
    "date_of_mailing": null,
    "approval_ec_bod": null,
    "cost_center": null,
    "invoice_description": null,
    "total": null,
    "items":[] 
  }
  maxDate=new Date();
  constructor(private router:Router,private location: Location, private apiservice: ApiServiceService, private alert: AlertService) { }

  ngOnInit() {
    this.tableData.push({});
    const invoice_no = new MDCTextField(document.querySelector('.invoice_no'));
    const invoice_date = new MDCTextField(document.querySelector('.invoice_date'));
    const p_d_d = new MDCTextField(document.querySelector('.p_d_d'));
    const d_o_m = new MDCTextField(document.querySelector('.d_o_m'));
    const approval = new MDCTextField(document.querySelector('.approval'));
    const textArea = new MDCTextField(document.querySelector('.textArea'));
    const p_t = new MDCSelect(document.querySelector('.p_t'));
    const m_o_p = new MDCSelect(document.querySelector('.m_o_p'));
    const cost_center = new MDCSelect(document.querySelector('.cost_center'));
    this.paymentMode();
    this.checkPayable();
    this.getcostCenter();
    this.getCodes();
  }

  back() {
    this.location.back();
  }

  paymentMode() {
    this.apiservice.GET('getAllPaymentMode').subscribe((dataVal: any) => {
      this.allPaymentMode = dataVal.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  checkPayable() {
    this.apiservice.GET('getAllCheckPayable').subscribe((dataVal: any) => {
      this.allCheckPayable = dataVal.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }


  getcostCenter() {
    this.apiservice.GET('GetAllCostCenter').subscribe((dataVal: any) => {
      this.allCostCenters = dataVal.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  getCodes() {
    this.apiservice.GET('getAllCodes').subscribe((dataVal: any) => {
      this.allCodes = dataVal.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  addRow() {
    this.tableData.push({});
  }

  getTotal(){
    var sum = 0;
    if(this.tableData.length){
      this.tableData.forEach(element => {
        sum+=parseInt(element.amount)
      });
    }
    this.NOpurchase.total = sum;
    return sum;
  }

  addNOpurchase(){
    this.NOpurchase.items = this.tableData;
    this.NOpurchase.date_of_mailing = moment(this.NOpurchase.date_of_mailing).format('DD/MM/YYYY');
    this.NOpurchase.payment_due_date = moment(this.NOpurchase.payment_due_date).format('DD/MM/YYYY');
    this.NOpurchase.invoice_date = moment(this.NOpurchase.invoice_date).format('DD/MM/YYYY')
    this.apiservice.POST('addNonPoInvoice',this.NOpurchase).subscribe((dataVal:any)=>{
      this.alert.onSuccess(dataVal.message?dataVal.message:'something went wrong','DISMISS');
        this.tableData = [{}];
        this.apiservice.reloadRoute('/invoice/other_payment');
    },error=>{
      console.log(JSON.stringify(error));
      this.alert.onError('Non PO invoice not created, Please try again later!','DISMISS');
    })
  }

}
