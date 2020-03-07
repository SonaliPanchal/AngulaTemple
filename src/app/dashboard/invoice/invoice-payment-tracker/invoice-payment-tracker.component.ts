import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
@Component({
  selector: 'app-invoice-payment-tracker',
  templateUrl: './invoice-payment-tracker.component.html',
  styleUrls: ['./invoice-payment-tracker.component.scss']
})
export class InvoicePaymentTrackerComponent implements OnInit {
  selectedDate: any = null;
  p: number = 1;

  constructor(private location:Location) { }

  ngOnInit() {
    // const poNo = new MDCSelect(document.querySelector('.poNo'));
    // const dO = new MDCTextField(document.querySelector('.dO'));
    // const grecieved = new MDCTextField(document.querySelector('.grecieved'));
    // const date = new MDCTextField(document.querySelector('.date'));
    // const invoiceNo = new MDCSelect(document.querySelector('.invoiceNo'));
    // const venderName = new MDCSelect(document.querySelector('.venderName'));
    // const invoiceDate = new MDCTextField(document.querySelector('.invoiceDate'));
    // const invoiceOAmt = new MDCSelect(document.querySelector('.invoiceOAmt'));

    // const finalAmt = new MDCSelect(document.querySelector('.finalAmt'));
    // const comment = new MDCSelect(document.querySelector('.comment'));
    // const status= new MDCSelect(document.querySelector('.status'));

    // const action = new MDCSelect(document.querySelector('.action'));
  }

  back(){
    this.location.back();
  }
}
