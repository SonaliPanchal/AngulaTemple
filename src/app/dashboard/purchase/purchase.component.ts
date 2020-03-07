import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  role:any = null;

  constructor(private location:Location) { }

  ngOnInit() {
     var usrVal = JSON.parse(localStorage.getItem('userData'));
     this.role = usrVal.role_id;
  }

  back(){
    this.location.back();
  }
}
