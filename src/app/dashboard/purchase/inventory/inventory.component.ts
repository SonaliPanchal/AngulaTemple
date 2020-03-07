import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AlertService } from 'src/app/services/alert.service';

declare var $: any;
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  p: number = 1;
  alldeity: any = [];
  selectedDeity: any;
  allInventory: any = [];
  importFile: any = [];
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    headers: ["ITEM ID", "ITEM DESCRIPTION", "WEIGHT", "S.O NUMBER", "VERIFIED", "VERIFIED DATE", "VERIFIED BY", "COMMENTS"],
    showTitle: true,
    useBom: false,
    title: '',
    removeNewLines: true,
    keys: ['item_id', 'item_description', 'weight', 'so_number', 'isVerified', 'verified_date', 'verified_by', 'comments']
  };
  constructor(private location: Location, private apiService: ApiServiceService, private alert: AlertService) { }

  ngOnInit() {
    const select = new MDCSelect(document.querySelector('.mdc-select'));
    this.getAlldeity();

  }

  getAlldeity() {
    this.apiService.GET('getAllDeity').subscribe((dataVal: any) => {
      this.alldeity = dataVal.data;

      this.selectedDeity = this.alldeity[0].deity_id;
      this.getAllInventory(this.selectedDeity)
    })
  }

  getAllInventory(id) {
    this.apiService.POST('getAllInventory', { deity_id: id }).subscribe((dataVal: any) => {
      if(dataVal.data){
        this.allInventory = dataVal.data;
        this.importFile = dataVal.data;
        this.importFile.map(function (val) {
          val.isVerified = val.isVerified == 1 ? 'Yes' : 'No'
        });
      }

    },error=>{
      console.log(JSON.stringify(error));
    })
  }

  selectDeity(id) {
    this.allInventory = [];
    this.importFile = [];
    this.getAllInventory(id);
  }

  printRow(row) {
    var popupWinindow = window.open('', '_blank', 'width=500,height=500,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write(`<html><head><link rel="stylesheet" type="text/css" href=src/styles.scss />
    <style>
    table, th, td {
      border: 1px solid black;
    }
    table {
      border-collapse: collapse;
    }
    .align-text{
      font-weight:bold
    }
    </style> 
    </head><body onload="window.print()"> <h4 class="align-text">Inventory</h4><table>
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Item Description</th>
          <th>Weight</th>
          <th>S.O Number</th>
          <th>Verified</th>
          <th>Verified Date</th>
          <th>Verified by</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody><tr>
      <td>${row.item_id}</td>
      <td>${row.item_description}</td>
      <td>${row.weight}</td>
      <td>${row.so_number}</td>
      <td>${row.so_number == 1 ? 'Yes' : 'No'}
      </td>
      <td>${row.verified_date}</td>
      <td>${row.verified_by}</td>
      <td>${row.comments}</td>
    </tr></tbody> </table></html>`);
    popupWinindow.document.close();
  }

  back() {
    this.location.back();
  }

}
