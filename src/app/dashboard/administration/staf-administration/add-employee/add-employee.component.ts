import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MDCSelect } from '@material/select';
import { MDCTextField } from '@material/textfield';
import { ApiServiceService } from 'src/app/services/api-service.service';
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  maxDate:any = new Date();
  constructor(private location:Location,private apiservice:ApiServiceService,private alert:AlertService) { }

  ngOnInit() {
    const Employee_ID = new MDCTextField(document.querySelector('.Employee_ID'));
    const Employee_Name = new MDCTextField(document.querySelector('.Employee_Name'));
    const Assignment_Start = new MDCTextField(document.querySelector('.Assignment_Start'));
    const Assignment_End = new MDCTextField(document.querySelector('.Assignment_End'));
    const Employee_Type = new MDCTextField(document.querySelector('.Employee_Type'));
    const Role = new MDCSelect(document.querySelector('.Role'));
    const Group_ID = new MDCTextField(document.querySelector('.Group_ID'));
  }
  back(){
    this.location.back();
  }

  creatEmployee(data){
    data.assignment_end = moment( data.assignment_end).format('DD-MM-YYYY');
    data.assignment_start = moment( data.assignment_start).format('DD-MM-YYYY');
    console.log(data);
    this.apiservice.POST('addEmployee',data).subscribe((postemployee:any)=>{
      this.alert.onSuccess(postemployee.message,'DISMISS');
      this.apiservice.reloadRoute('/administration/staf_administration/add_employee');
      // console.log(postemployee.message);

    },error=>{
      console.log(JSON.stringify(error));
      this.alert.onError('Please try again later','DISMISS')
    })
  }
}
