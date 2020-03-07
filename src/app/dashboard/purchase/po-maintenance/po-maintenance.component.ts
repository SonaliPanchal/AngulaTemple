import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { FilterService } from 'src/app/services/filter.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-po-maintenance',
  templateUrl: './po-maintenance.component.html',
  styleUrls: ['./po-maintenance.component.scss']
})
export class PoMaintenanceComponent implements OnInit {
  maxDate = new Date();
  orderTracker: any = [];
  tempOrderTracker: any = [];
  keys: any = [];
  p: number = 1;
  filterdObj: any = {
    "po_no": null,
    "po_date": null,
    "date_recieved": null,
    "status": null,
    "vendor_name": null,
  }

  constructor(private router: Router, private location: Location, private apiservice: ApiServiceService, private filter: FilterService) { }

  ngOnInit() {
    const select = new MDCSelect(document.querySelector('.vender'));
    const pon = new MDCSelect(document.querySelector('.pon'));
    const status = new MDCSelect(document.querySelector('.status'));
    const pod = new MDCSelect(document.querySelector('.pod'));
    const dd = new MDCSelect(document.querySelector('.dd'));
    this.getPurchaseOrderTracker();
  }

  back() {
    this.location.back();
  }

  getPurchaseOrderTracker() {
    this.apiservice.GET('purchaseOrderTracker').subscribe((dataorderTracker: any) => {
      this.orderTracker = dataorderTracker.data;
      this.tempOrderTracker = dataorderTracker.data;
      this.keys = Object.keys(this.filterdObj)
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

  ApplyFilter(data, keyField) {
    // console.log(data,keyField);
    if (keyField == 'status') {
      data = parseInt(data);
    }
    this.tempOrderTracker = JSON.parse(JSON.stringify(this.orderTracker));
    this.tempOrderTracker = this.filter.applyFilter(data, this.tempOrderTracker, keyField);
    // console.log(this.tempOrderTracker)
    this.blank(keyField, this.tempOrderTracker);
  }

  blank(keyField, data) {
    this.keys.forEach(element => {
      this.filterdObj[element] = data[0][element];
    })
  }

  getPODetail(po) {
    this.router.navigate(['/invoice_no', po])
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
}
