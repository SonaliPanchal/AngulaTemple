import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiServiceService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-vendor-management',
  templateUrl: './vendor-management.component.html',
  styleUrls: ['./vendor-management.component.scss']
})
export class VendorManagementComponent implements OnInit {
  allVendore:any=[];

  constructor(private location:Location,private apiservice:ApiServiceService) { }

  ngOnInit() {
        this.getAllVendor();
  }

  back(){
    this.location.back();
  }

  getAllVendor(){
    this.apiservice.GET('getAllVendor').subscribe((dataVendoe:any)=>{
        this.allVendore = dataVendoe.data;
    },error=>{
      console.log(JSON.stringify(error));
    })
  }


}
