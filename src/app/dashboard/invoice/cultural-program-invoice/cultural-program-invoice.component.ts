import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AlertService } from 'src/app/services/alert.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cultural-program-invoice',
  templateUrl: './cultural-program-invoice.component.html',
  styleUrls: ['./cultural-program-invoice.component.scss']
})
export class CulturalProgramInvoiceComponent implements OnInit {
  allPaymentMode:any=[];
  allOfficers:any=[];
  allCheckPayable:any=[];
  allCodes:any=[];
  maxDate:any= new Date();
  dataObj:any={
    "check_payable_to":"",
      "committee":"",
      "check_number":"",
      "payment_mode_id":"",
      "code_id":"",
      "officer1_sign":null,
      "officer2_sign":null,
      "officer1_sign_date":"",
      "officer2_sign_date":"",
      "officer3_sign_date":"",
      "date_payment_due":"",
      "invoice_no":"",
      "amount":"",
      "grand_total":null,
      "particulars":null,
      "date_of_mailing":"",
      "approval_ec_bod":""
  }
  a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];



  constructor(private location: Location,private apiservice:ApiServiceService,private alert:AlertService) { }

  ngOnInit() {
    const c_p = new MDCSelect(document.querySelector('.c_p'));
    const check_no = new MDCTextField(document.querySelector('.check_no'));
    const m_o_p = new MDCSelect(document.querySelector('.m_o_p'));
    const committee_project = new MDCTextField(document.querySelector('.committee_project'));
    const ApprovalDate = new MDCTextField(document.querySelector('.ApprovalDate'));
    const date_due = new MDCTextField(document.querySelector('.date_due'));
    const invoice_no = new MDCTextField(document.querySelector('.invoice_no'));
    const date = new MDCTextField(document.querySelector('.date'));
    const s_d = new MDCSelect(document.querySelector('.s_d'));
    const Signature = new MDCTextField(document.querySelector('.Signature'));
    const Signature1 = new MDCTextField(document.querySelector('.Signature1'));
    const Signature2 = new MDCTextField(document.querySelector('.Signature2'));
    const sign = new MDCSelect(document.querySelector('.sign'));
    this.paymentMode();
    this.checkPayable();
    this.officers();
    this.getCodes();
  }

  back() {
    this.location.back();
  }

  paymentMode(){
    this.apiservice.GET('getAllPaymentMode').subscribe((dataVal:any)=>{
      this.allPaymentMode = dataVal.data;
    },error=>{
      console.log(JSON.stringify(error));
    })
  }

  checkPayable(){
    this.apiservice.GET('getAllCheckPayable').subscribe((dataVal:any)=>{
      this.allCheckPayable = dataVal.data;
    },error=>{
      console.log(JSON.stringify(error));
    })
  }

  officers(){
    this.apiservice.GET('getAllOfficers').subscribe((dataVal:any)=>{
      this.allOfficers = dataVal.data;
    },error=>{
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

  convertToWord(num){
    if ((num = num.toString()).length > 9) return 'overflow';
    var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; 
    var str = '';
    str += (Number(n[1]) != 0) ? (this.a[Number(n[1])] || this.b[n[1][0]] + ' ' + this.a[n[1][1]]) + 'crore ' : '';
    str += (Number(n[2]) != 0) ? (this.a[Number(n[2])] || this.b[n[2][0]] + ' ' + this.a[n[2][1]]) + 'lakh ' : '';
    str += (Number(n[3]) != 0) ? (this.a[Number(n[3])] || this.b[n[3][0]] + ' ' + this.a[n[3][1]]) + 'thousand ' : '';
    str += (Number(n[4]) != 0) ? (this.a[Number(n[4])] || this.b[n[4][0]] + ' ' + this.a[n[4][1]]) + 'hundred ' : '';
    str += (Number(n[5]) != 0) ? ((str != '') ? 'and ' : '') + (this.a[Number(n[5])] || this.b[n[5][0]] + ' ' + this.a[n[5][1]]) + 'only ' : '';
    return str;
  }

  postCultural(){
    this.dataObj.date_of_mailing = moment(this.dataObj.date_of_mailing).format('DD/MM/YYYY')
    this.dataObj.officer1_sign_date = moment(this.dataObj.officer1_sign_date).format('DD/MM/YYYY')
    this.dataObj.officer2_sign_date = moment(this.dataObj.officer2_sign_date).format('DD/MM/YYYY')
    this.dataObj.officer3_sign_date = moment(this.dataObj.officer3_sign_date).format('DD/MM/YYYY')
    this.dataObj.date_payment_due = moment(this.dataObj.date_payment_due).format('DD/MM/YYYY')
    this.apiservice.POST('addCulturalPayments',this.dataObj).subscribe((dataVal:any)=>{
        this.alert.onSuccess(dataVal.message,'DISMISS');
       
        this.apiservice.reloadRoute('/invoice/cp_invoice');
    },error=>{
      this.alert.onError('Cultural program invoice not added, Please try again later.','DISMISS')
      console.log(JSON.stringify(error));
    })
  }

  grandTotal(val){
    this.dataObj.grand_total = val;
    return val;
  }

}
