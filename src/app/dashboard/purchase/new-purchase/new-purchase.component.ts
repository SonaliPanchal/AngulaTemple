import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import { ApiServiceService } from 'src/app/services/api-service.service';
import *as moment from 'moment';
import { AlertService } from 'src/app/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;
import * as _ from 'lodash';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.scss']
})
export class NewPurchaseComponent implements OnInit {
  index: any = 1;
  tableArr: any = [];
  allVenders: any = [];
  allTemplates: any = [];
  allCodes: any = [];
  allUnits: any = [];
  allItems: any = [];
  allDeliver: any = [];
  vendor: any;
  code: any;
  template: any;
  po: any;
  deliery_to: any;
  priceVal: any;
  statusVal: any = [{}];
  keyValStatus: any = [];
  invoiceNum: any = null;
  invoiceDate: any = null;
  getTotalPoAmount: any = 0;
  getTotalAmount: any = 0;
  localStorage: any = {};
  role: any = null;
  poData: any = {};
  items: any = [];
  statusData: any = [];
  po_id: any = null;
  maxDate: any = new Date();
  poNum: any = [];
  last_updated_comment: any = null;
  recievedItem: any = [];
  savedasDraft: boolean = false;
  statusCondition: any = {
    "draft": null,
    "submitted": null,
    "approved_1_by": null,
    "approved_2_by": null,
    "to_vendor": null,
    "good_received": null,
    "complete_payment": null
  };
  disableAdd: boolean = false;
  disableDraft: boolean = false;
  disableSubmit: boolean = false;
  disableApproveOne: boolean = false;
  disableApproveTwo: boolean = false;
  disableApproveReceiveditem: boolean = false;
  disableUploadInv: boolean = false;
  approve1Comment: any = null;
  approve2Comment: any = null;

  constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private location: Location, private apiService: ApiServiceService, private alert: AlertService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.po_id = params['id'];
      this.statusVal = [{}];
      if (this.po_id)
        this.getPoDetail(this.po_id)
    });

    this.tableArr.push({});
    this.localStorage = localStorage.getItem('userData');
    this.localStorage = JSON.parse(this.localStorage);
    this.role = parseInt(this.localStorage.role_id);
    if (this.role && !this.po_id) {
      this.disableFunName();
    }
    this.poData = {
      code_id: null,
      created_date: null,
      date_order: new Date(),
      date_recieved: new Date(),
      delivery_id: null,
      grant_total: null,
      id: null,
      po_no: null,
      po_total: null,
      pur_invoice_status: null,
      purchase_id: null,
      status: null,
      template_id: null,
      updated_date: null,
      vendor_id: null,
      prepared_by: this.localStorage.full_name ? this.localStorage.full_name : this.localStorage.username
    }

    const select = new MDCSelect(document.querySelector('.mdc-select'));
    const Vendor = new MDCSelect(document.querySelector('.Vendor'));
    const Template = new MDCSelect(document.querySelector('.Template'));
    const Delivery = new MDCSelect(document.querySelector('.Delivery'));
    const Expense = new MDCSelect(document.querySelector('.Expense'));
    const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
    const orderedDate = new MDCTextField(document.querySelector('.orderedDate'));
    const dateReceived = new MDCTextField(document.querySelector('.dateReceived'));
    const lastUpdated = new MDCTextField(document.querySelector('.lastUpdated'));
    const approved1 = new MDCTextField(document.querySelector('.approved1'));
    const approved2 = new MDCTextField(document.querySelector('.approved2'));
    const invoice_n = new MDCTextField(document.querySelector('.invoice_n'));
    const invoice_d = new MDCTextField(document.querySelector('.invoice_d'));
    this.getVender();
    this.getCodes();
    if (!this.po_id)
      this.getPurchaseOrderTracker();
    this.getAllDelivery();
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  getPurchaseOrderTracker() {
    this.apiService.asyncGET('purchaseOrderTracker').subscribe((dataorderTracker: any) => {
      var purchaseOrderTracker = dataorderTracker.data;
      var count = 0;
      purchaseOrderTracker.forEach(element => {
        if (moment(element.po_date).format('MM/DD/YYYY') == moment().format('MM/DD/YYYY')) {
          this.poNum.push(count + 1);
        }
      });
      var length = this.poNum.length;
      if (this.poNum.length) {
        this.poData.po_no = moment().format('YYYYMMDD') + '00' + (length + 1);
      } else {
        this.poData.po_no = moment().format('YYYYMMDD') + '001';
      }
    }, error => {
      console.log(JSON.stringify(error));
    })
  }


  //get po by id
  getPoDetail(id) {
    this.apiService.POST('getAllPurchaseData', { purchase_id: id }).subscribe((dataVal: any) => {
      // console.log(dataVal);
      this.poData = dataVal.data;
      this.poData.date_order = new Date(this.poData.date_order);
      this.poData.date_recieved = new Date(this.poData.date_recieved);
      this.poData.invoice_date = new Date(this.poData.invoice_date);
      // console.log(this.poData.date_order)
      this.po = this.poData.po_no;
      this.getTotalPoAmount = this.poData.po_total ? parseFloat(this.poData.po_total) : 0;
      this.getTotalAmount = this.poData.grant_total ? parseFloat(this.poData.grant_total) : 0;
      if (this.poData && this.poData.recievedItems && this.poData.recievedItems.length) {
        this.recievedItem = this.poData.recievedItems;
      }
      if (this.poData && this.poData.invoiceDetails && this.poData.invoiceDetails.length) {
        this.invoiceNum = this.poData.invoiceDetails[this.poData.invoiceDetails.length - 1].invoice_no ? this.poData.invoiceDetails[this.poData.invoiceDetails.length - 1].invoice_no : null;
        this.invoiceDate = this.poData.invoiceDetails[this.poData.invoiceDetails.length - 1].invoice_date ? new Date(this.poData.invoiceDetails[this.poData.invoiceDetails.length - 1].invoice_date) : null;
      }
      if (this.poData && this.poData.orderItems && this.poData.orderItems.length) {
        this.tableArr = this.poData.orderItems;
        this.tableArr.map((val, key) => {
          this.getUnits(val.select_item_id, key);
          this.getPrice(val.unit_id, val.select_item_id, key);
          if (key <= this.recievedItem.length) {
            val.final_price = this.recievedItem[key] && this.recievedItem[key].final_price ? this.recievedItem[key].final_price : null;
            val.received_qty = this.recievedItem[key] && this.recievedItem[key].received_qty ? this.recievedItem[key].received_qty : null;
            val.check = this.recievedItem[key] && this.recievedItem[key].check ? this.recievedItem[key].check : null;
            val.action = this.recievedItem[key] && this.recievedItem[key].action ? this.recievedItem[key].action : null;
          }
        });
      }
      if (this.poData && this.poData.po_status && this.poData.po_status.length) {
        this.statusVal = this.poData.po_status;
        this.approve2Comment = this.statusVal[this.statusVal.length - 1].approved_by_two_comment;
        this.approve1Comment = this.statusVal[this.statusVal.length - 1].approved_by_one_comment;
        this.setDisabled(this.statusVal[this.statusVal.length - 1]);
        this.getClass();
        this.last_updated_comment = this.statusVal[this.statusVal.length - 1].last_updated_comment;
        // console.log('last_updated',this.last_updated_comment)
      } else {
        if (this.poData && this.po)
          this.getAllStatus(this.po)
      }
      if (this.poData && this.poData.vendor_id && this.poData.template_id) {
        this.getAllItems(this.poData.template_id);
      }
      if (this.poData && this.poData.vendor_id) {
        this.getTemplates(this.poData.vendor_id);
      }

    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  back() {
    this.location.back();
  }

  addRow() {
    this.tableArr.push({});
    // this.getTotalPo();
    // this.items = this.tableArr;
  }

  submit() {
    this.savedasDraft = false;
    if (this.role == 1) {
      var items = [];

      this.tableArr.forEach(element => {
          items.push({
            "select_item_id": element.select_item_id,
            "unit_id": element.unit_id,
            "qty": element.qty,
            "price": element.price,
            "amount": element.amount
          })
      });
      let submitData = {
        "vendor_id": this.poData.vendor_id,
        "po_no": this.poData.po_no,
        "delivery_id": this.poData.delivery_id,
        "template_id": this.poData.template_id,
        "code_id": this.poData.code_id,
        "po_total": this.getTotalPoAmount,//this.poData.po_total
        "items": items,
        "prepared_by": this.poData.prepared_by,
        "date_order": moment(this.poData.date_order).format('MM/DD/YYYY'),
      }

      // console.log('submitData',submitData);
      this.apiService.POST('addOrder', submitData).subscribe((dataVal: any) => {
        this.alert.onSuccess(dataVal.message, 'DISMISS');
        if (this.po_id) {
          this.apiService.reloadRoute('/purchase/' + this.po_id);
        } else {
          this.apiService.reloadRoute('/purchase/new');
        }

      }, error => {
        this.alert.onError('PO not created ', 'DISMISS');
      })
    }

  }

  saveAsDraft() {

    if (this.role == 1) {
      var items = [];
      this.tableArr.forEach(element => {
        // if (!element.order_item_id) {
          items.push({
            "select_item_id": element.select_item_id,
            "unit_id": element.unit_id,
            "qty": element.qty,
            "price": element.price,
            "amount": element.amount
          })
        // }
      });
      let saveAsDraftData = {
        "vendor_id": this.poData.vendor_id,
        "po_no": this.poData.po_no,
        "delivery_id": this.poData.delivery_id,
        "template_id": this.poData.template_id,
        "code_id": this.poData.code_id,
        "prepared_by": this.poData.prepared_by,
        "date_order": moment(this.poData.date_order).format('MM/DD/YYYY'),
        "po_total": this.getTotalPoAmount,//this.poData.po_total
        "items": items
      }
      // console.log('saveAsDraftData',saveAsDraftData);
      this.apiService.POST('addDraft', saveAsDraftData).subscribe((dataVal: any) => {
        this.alert.onSuccess(dataVal.message, 'DISMISS');
        this.savedasDraft = true;
        if (!this.po_id && this.statusVal.length == 1) {
          this.statusVal = [{
            "draft": 1,
            "submitted": 0,
            "approved_1_by": 0,
            "approved_2_by": 0,
            "to_vendor": 0,
            "good_received": 0,
            "complete_payment": 0
          }];
          this.getClass();
        }

        // this.apiService.reloadRoute('/purchase/new');

      }, error => {
        console.log(JSON.stringify(error));
        this.alert.onError('Not saved as draft, Try again later!', 'DISMISS');
      })
    }
  }

  AddReceivedItem() {
    this.savedasDraft = false;
    if (this.role == 4) {
      var items = [];
      this.tableArr.forEach(element => {
        // if (!element.recieved_order_id) {
          items.push({
            "order_item_id": element.order_item_id,
            "received_qty": element.received_qty ? element.received_qty : 0,
            "final_price": element.final_price ? element.final_price : 0,
            "check": element.check ? 1 : 0,
            "action": element.action ? 1 : 0,
          })
        // }
      });
      // console.log(items,'items')
      let recivedData = {
        "date_recieved": moment(this.poData.date_recieved).format('MM/DD/YYYY'),
        "last_updated_by": this.localStorage.full_name ? this.localStorage.full_name : this.localStorage.username,
        "last_updated_comment": this.last_updated_comment,
        "po_no": this.poData.po_no,
        "grant_total": this.getTotalAmount, //this.poData.grant_total
        "recievedItems": items
      }
      // console.log('recivedData',recivedData)
      this.apiService.POST('addRecievedItems', recivedData).subscribe((dataVal: any) => {
        this.alert.onSuccess(dataVal.message, 'DISMISS');
        if (this.po_id) {
          this.apiService.reloadRoute('/purchase/' + this.po_id);
        } else {
          this.apiService.reloadRoute('/purchase/new');
        }
      }, error => {
        console.log(JSON.stringify(error));
        this.alert.onError('Recived items not added', 'DISMISS');
      })
    }
  }

  getVender() {
    this.apiService.asyncGET('getAllVendor').subscribe((dataVal: any) => {
      this.allVenders = dataVal.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  getTemplates(id) {
    var obj = {
      "vendor_id": id
    }
    this.apiService.asyncPOST('getAllTemplates', obj).subscribe((dataVal: any) => {
      this.allTemplates = dataVal.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  getCodes() {
    this.apiService.asyncGET('getAllCodes').subscribe((dataVal: any) => {
      this.allCodes = dataVal.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  getUnits(id, index) {
    this.apiService.asyncPOST('getAllUnits', { "select_item_id": id }).subscribe((dataVal: any) => {
      this.tableArr[index].allUnits = dataVal.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  getAllItems(id) {
    var obj = {
      "template_id": id,
      "vendor_id": this.poData.vendor_id
    }
    this.apiService.asyncPOST('getAllItems', obj).subscribe((dataVal: any) => {
      this.allItems = dataVal.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  getAllDelivery() {
    this.apiService.asyncGET('getAllDelivery').subscribe((datadelivery: any) => {
      this.allDeliver = datadelivery.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  submitnewPurchase(dataToPost1, dataToPost2) {
    console.log(dataToPost1, dataToPost2);
  }

  getTotalPo() {
    var sum: any = 0;
    this.getTotalPoAmount = 0;
    this.tableArr.map(function (val) {
      sum += parseFloat(val.amount ? val.amount : 0);
    })
    sum = parseFloat(sum).toFixed(2);
    this.getTotalPoAmount = sum;
    return this.getTotalPoAmount;
  }
  getTotalFinalPrice(data, index) {
    this.tableArr[index].final_price = data ? parseFloat(data) : 0;
    this.getTotal();
  }

  receivedQty(data, row, index) {
    this.tableArr[index].received_qty = data ? parseInt(data) : 0;
    this.getTotal();
  }


  getTotal() {
    var sum: any = 0;
    this.getTotalAmount = 0;
    this.tableArr.map(function (val) {
      sum += (val.final_price ? val.final_price : 0) * (val.received_qty ? val.received_qty : 0);
    })
    sum = parseFloat((sum)).toFixed();
    this.getTotalAmount = sum;
    return this.getTotalAmount;
  }

  //get all units
  getAllUnit(data, index) {
    this.getUnits(data, index);
  }

  //getPrice

  getPriceVal(data, index) {
    var select_item_id = null;
    select_item_id = this.tableArr[index].select_item_id;
    this.getPrice(data, select_item_id, index)
  }

  getPrice(id, select_item_id, index) {
    var obj = {
      "select_item_id": select_item_id,
      "unit_id": id
    }
    this.apiService.asyncPOST('getPrice', obj).subscribe((dataVal: any) => {
      this.tableArr[index].price = dataVal.data ? dataVal.data[0].price : null;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  enterQty(row, index) {
    this.tableArr[index].amount = (parseFloat(row.price ? row.price : 0) * parseInt(row.qty ? row.qty : 0)).toFixed(2);
    this.getTotalPo();
  }

  enterPrice(val, row, index) {
    this.tableArr[index].amount = (parseFloat(val) * parseInt(row.qty ? row.qty : 0)).toFixed(2);
    this.getTotalPo();
  }

  getAllStatus(poNum) {
    this.keyValStatus = [];
    this.statusVal = [];
    this.apiService.asyncPOST('getPoStatus', { "po_no": poNum }).subscribe((dataVal: any) => {
      if (dataVal.data)
        this.statusVal = dataVal.data;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  getClass() {

    var flag: boolean = false;
    var statusObj = this.statusVal[this.statusVal.length - 1]
    for (var key in this.statusCondition) {
      if (parseInt(statusObj[key]) != 0) {
        this.statusCondition[key] = 'done';
      } else if (!flag) {
        this.statusCondition[key] = 'active';
        flag = true;
      }
    }
  }

  //uploadInvoice
  uploadInvoice() {
    this.savedasDraft = false;
    if (this.role == 5) {
      var dataObject = {
        "po_no": this.poData.po_no,
        "invoice_no": this.invoiceNum,
        "invoice_date": moment(this.invoiceDate).format('MM/DD/YYYY')
      }
      this.apiService.POST('addPoInvoice', dataObject).subscribe((dataVal: any) => {
        this.alert.onSuccess(dataVal.message, 'DISMISS');
        if (this.po_id) {
          this.apiService.reloadRoute('/purchase/' + this.po_id);
        } else {
          this.apiService.reloadRoute('/purchase/new');
        }
      }, (error) => {
        this.alert.onError('Invoice not uploaded, please try again later!', 'DISMISS');
      })
    }
  }

  poEntry(poNum) {
    if (poNum) {
      this.getAllStatus(poNum);
    } else {
      this.statusVal = [];
    }
  }

  //approval 1  
  Approval1(data) {
    this.savedasDraft = false;
    var obj = {
      "po_no": this.poData.po_no,
      "approved_by_one_name": this.localStorage.full_name ? this.localStorage.full_name : this.localStorage.username,
      "approved_by_one_comment": data
    }
    if (this.role == 2) {
      this.apiService.POST('approvedByOne', obj).subscribe((dataVal: any) => {
        this.alert.onSuccess(dataVal.message, 'Dismiss');
        if (this.po_id) {
          this.apiService.reloadRoute('/purchase/' + this.po_id);
        } else {
          this.apiService.reloadRoute('/purchase/new');
        }
      }, error => {
        this.alert.onError('Not Approved, Plesae try again later.', 'DISMISS');
      })
    }
  }

  //approval 2  
  Approval2(data) {
    this.savedasDraft = false;
    var obj = {
      "po_no": this.poData.po_no,
      "approved_by_two_name": this.localStorage.full_name ? this.localStorage.full_name : this.localStorage.username,
      "approved_by_two_comment": data
    }
    if (this.role == 3) {
      this.apiService.POST('approvedByTwo', obj).subscribe((dataVal: any) => {
        this.alert.onSuccess(dataVal.message, 'Dismiss');
        if (this.po_id) {
          this.apiService.reloadRoute('/purchase/' + this.po_id);
        } else {
          this.apiService.reloadRoute('/purchase/new');
        }
      }, error => {
        this.alert.onError('Not Approved, Plesae try again later.', 'DISMISS');
      })
    }
  }

  disableFunName() {
    if (this.role == 1) {
      this.disableAdd = false;
      this.disableDraft = false;
      this.disableSubmit = false;
      this.disableApproveOne = true;
      this.disableApproveTwo = true;
      this.disableApproveReceiveditem = true;
      this.disableUploadInv = true;
    } else if (this.role == 2) {
      this.disableAdd = true;
      this.disableDraft = true;
      this.disableSubmit = true;
      this.disableApproveOne = false;
      this.disableApproveTwo = true;
      this.disableApproveReceiveditem = true;
      this.disableUploadInv = true;
    } else if (this.role == 3) {
      this.disableAdd = true;
      this.disableDraft = true;
      this.disableSubmit = true;
      this.disableApproveOne = true;
      this.disableApproveTwo = false;
      this.disableApproveReceiveditem = true;
      this.disableUploadInv = true;
    } else if (this.role == 4) {
      this.disableAdd = true;
      this.disableDraft = true;
      this.disableSubmit = true;
      this.disableApproveOne = true;
      this.disableApproveTwo = true;
      this.disableApproveReceiveditem = false;
      this.disableUploadInv = true;
    } else if (this.role == 5) {
      this.disableAdd = true;
      this.disableDraft = true;
      this.disableSubmit = true;
      this.disableApproveOne = true;
      this.disableApproveTwo = true;
      this.disableApproveReceiveditem = true;
      this.disableUploadInv = false;
    }
  }

  setDisabled(statusObj) {
    if (this.role == 1) {
      if (parseInt(statusObj.submitted)) {
        this.disableAdd = true;
        this.disableDraft = true;
        this.disableSubmit = true;
      } else {
        this.disableAdd = false;
        this.disableDraft = false;
        this.disableSubmit = false;
      }
      this.disableApproveOne = true;
      this.disableApproveTwo = true;
      this.disableApproveReceiveditem = true;
      this.disableUploadInv = true;
    } else if (this.role == 2) {
      if (parseInt(statusObj.approved_1_by)) {
        this.disableApproveOne = true;
      } else {
        this.disableApproveOne = false;
      }
      this.disableAdd = true;
      this.disableDraft = true;
      this.disableSubmit = true;
      this.disableApproveTwo = true;
      this.disableApproveReceiveditem = true;
      this.disableUploadInv = true;
    } else if (this.role == 3) {
      if (statusObj.approved_2_by) {
        this.disableApproveTwo = true;
      } else {
        this.disableApproveOne = false;
      }
      this.disableAdd = true;
      this.disableDraft = true;
      this.disableSubmit = true;
      this.disableApproveOne = true;
      this.disableApproveReceiveditem = true;
      this.disableUploadInv = true;
    } else if (this.role == 4) {

      if (parseInt(statusObj.good_received)) {
        this.disableApproveReceiveditem = true;
      } else {
        this.disableApproveReceiveditem = false;
      }
      this.disableAdd = true;
      this.disableDraft = true;
      this.disableSubmit = true;
      this.disableApproveOne = true;
      this.disableApproveTwo = true;

      this.disableUploadInv = true;
    } else if (this.role == 5) {
      if (parseInt(statusObj.complete_payment)) {
        this.disableUploadInv = true;
      } else {
        this.disableUploadInv = false;
      }
      this.disableAdd = true;
      this.disableDraft = true;
      this.disableSubmit = true;
      this.disableApproveOne = true;
      this.disableApproveTwo = true;
      this.disableApproveReceiveditem = true;
    }
  }
}
