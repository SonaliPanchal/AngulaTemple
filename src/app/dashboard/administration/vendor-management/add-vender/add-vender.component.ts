import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import { ApiServiceService } from 'src/app/services/api-service.service';
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-add-vender',
  templateUrl: './add-vender.component.html',
  styleUrls: ['./add-vender.component.scss']
})
export class AddVenderComponent implements OnInit {

  constructor(private location:Location,private apiservice:ApiServiceService,private alert:AlertService) { }

  ngOnInit() {
    const Employee_ID = new MDCTextField(document.querySelector('.Employee_ID'));
    const Employee_Name = new MDCTextField(document.querySelector('.Employee_Name'));
    const Assignment_Start = new MDCTextField(document.querySelector('.Assignment_Start'));
    const Assignment_End = new MDCTextField(document.querySelector('.Assignment_End'));
    const Employee_Type = new MDCTextField(document.querySelector('.Employee_Type'));
    const Role = new MDCTextField(document.querySelector('.Role'));
    const Group_ID = new MDCTextField(document.querySelector('.Group_ID'));
    // const eigthOne = new MDCTextField(document.querySelector('.eigthOne'));
  }

  back(){
    this.location.back();
  }

  addVendor(data){
    this.apiservice.POST('addVendor',data).subscribe((postedData:any)=>{
      console.log(postedData);
      this.alert.onSuccess(postedData.message,'Dismiss');
      this.apiservice.reloadRoute('/administration/vender_management/add_vender');
    },error=>{
      console.log(JSON.stringify(error));
      // this.alert.onError(error,'ok');
    })
  }

}
