import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import * as moment from 'moment';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.scss']
})
export class PurchaseInvoiceComponent implements OnInit {
  selectedDate: any = null;
  p: number = 1;
  date: any = new Date();
  maxDate: any = new Date();
  purchasInvoice: any = [];
  allPurchaseInvoice: any = [];
  keys: any = [];
  dataObj: any = {
    "po_no": null,
    "date_order": null,
    "good_received": null,
    "invoice_no": null,
    "invoice_date": null,
    "vendor_name": null,
    "invoice_original_amount": null,
    "status": null,
    "final_amount": null,
    "comment": null,
    "action": null
  }
  constructor(private location: Location, private apiService: ApiServiceService, private filter: FilterService) { }

  ngOnInit() {
    const poNo = new MDCSelect(document.querySelector('.poNo'));
    const dO = new MDCSelect(document.querySelector('.dO'));
    const grecieved = new MDCSelect(document.querySelector('.grecieved'));
    const date = new MDCTextField(document.querySelector('.date'));
    const invoiceNo = new MDCSelect(document.querySelector('.invoiceNo'));
    const venderName = new MDCSelect(document.querySelector('.venderName'));
    const invoiceDate = new MDCSelect(document.querySelector('.invoiceDate'));
    const invoiceOAmt = new MDCSelect(document.querySelector('.invoiceOAmt'));

    const finalAmt = new MDCSelect(document.querySelector('.finalAmt'));
    const comment = new MDCSelect(document.querySelector('.comment'));
    const status = new MDCSelect(document.querySelector('.status'));

    const action = new MDCSelect(document.querySelector('.action'));
    this.getPurchaseInvoice();

  }

  getPurchaseInvoice() {
    var date_order = moment(this.date).format('MM/DD/YYYY');
    this.apiService.POST('getAllPurchasInvoice', { "date_order": date_order }).subscribe((dataVal: any) => {
      this.purchasInvoice = dataVal.data;
      this.allPurchaseInvoice = dataVal.data;
      this.keys = Object.keys(this.dataObj)
    }, error => {
      console.log(JSON.stringify(error))
    })
  }

  changeDate(dateVal) {
    // dateVal=moment(dateVal).format('DD/MM/YYYY')
    this.date = dateVal;
    if (dateVal)
      this.getPurchaseInvoice();
  }

  back() {
    this.location.back();
  }
  getStatus(status) {
    if (parseInt(status) == 1) {
      return 'Submitted'
    } else if (parseInt(status) == 2) {
      return 'Approved'
    } else if (parseInt(status) == 3) {
      return 'Received'
    } else if (parseInt(status) == 4) {
      return 'Paid'
    }
    else {
      return 'Draft'
    }
  }

  ApplyFilter(data, keyField) {
    if (keyField == 'invoice_original_amount' || keyField == 'final_amount' || keyField == 'status')
      data = parseInt(data);
    this.purchasInvoice = JSON.parse(JSON.stringify(this.allPurchaseInvoice));
    this.purchasInvoice = this.filter.applyFilter(data, this.purchasInvoice, keyField);
    this.blank(keyField, this.purchasInvoice);
  }

  blank(keyField, data) {
    this.keys.forEach(element => {
      this.dataObj[element] = data[0] ? data[0][element] : null;
    })
  }

}
