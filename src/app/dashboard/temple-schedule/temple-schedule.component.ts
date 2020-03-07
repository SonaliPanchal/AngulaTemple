import { Component, OnInit } from '@angular/core';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Alert } from 'selenium-webdriver';
import { Location } from '@angular/common';
import { AlertService } from 'src/app/services/alert.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temple-schedule',
  templateUrl: './temple-schedule.component.html',
  styleUrls: ['./temple-schedule.component.scss']
})
export class TempleScheduleComponent implements OnInit {
  days:any=[];
  pujaDataVAl:any = [];
  constructor(private router:Router,private location:Location,private apiService:ApiServiceService,private alert:AlertService) { }

  ngOnInit() {
    const description = new MDCTextField(document.querySelector('.description'));
    const price = new MDCTextField(document.querySelector('.price'));
    const reportingTime = new MDCTextField(document.querySelector('.reportingTime'));
    const p_name = new MDCSelect(document.querySelector('.p_name'));
    const d_o_w = new MDCSelect(document.querySelector('.d_o_w'));
    this.getAllPuja();
    this.getAllDay();
  }

  publish(data){
    // data.date = moment(data.date).format('DD/MM/YYYY');
    console.log('publishData',data);
    this.apiService.POST('templeSchedule',data).subscribe((templateVal:any)=>{
        this.alert.onSuccess(templateVal.message,'DISMISS');
        this.router.navigate(['/dashboard']);
    },error=>{
      this.alert.onError('Template SChedule failed, Please try aguan later!','DISMISS')
    })
  }
  back(){
    this.location.back();
  }
  getAllDay(){
    this.apiService.GET('getAllDays').subscribe((dataVal:any)=>{
      this.days = dataVal.results;
    },error=>{
      console.log(JSON.stringify(error));
    })
  }

  getAllPuja(){
    this.apiService.GET('allPujaAtTemple').subscribe((pujaData:any)=>{
      this.pujaDataVAl = pujaData.data;
    },error=>{
      console.log(JSON.stringify(error));
    })
  }

}
