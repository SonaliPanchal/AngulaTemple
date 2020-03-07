import { Component, OnInit } from '@angular/core';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Alert } from 'selenium-webdriver';
import { Location } from '@angular/common';
import { AlertService } from 'src/app/services/alert.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
moment
@Component({
  selector: 'app-priest-reservation',
  templateUrl: './priest-reservation.component.html',
  styleUrls: ['./priest-reservation.component.scss']
})
export class PriestReservationComponent implements OnInit {
  allService:any=[];
  days:any=[];

  constructor(private router:Router,private location:Location,private apiService:ApiServiceService,private alert:AlertService) { }

  ngOnInit() {
    const f_name = new MDCTextField(document.querySelector('.f_name'));
    const l_name = new MDCTextField(document.querySelector('.l_name'));
    const address = new MDCTextField(document.querySelector('.address'));
    const mobile = new MDCTextField(document.querySelector('.mobile'));
    const email = new MDCTextField(document.querySelector('.email'));
    const date = new MDCTextField(document.querySelector('.date'));
    const services = new MDCSelect(document.querySelector('.services'));
    this.getAllService();
  }
  back(){
    this.location.back();
  }

  getAllService(){
    this.apiService.GET('allPujaAtHome').subscribe((dataVal:any)=>{
      this.allService = dataVal.data;
    },error=>{
      console.log(JSON.stringify(error));
    })
  }

  priestSchedule(data){
    data.date = moment(data.date).format('DD/MM/YYYY');
    // console.log('priest_reservation',data);
    this.apiService.POST('priestReservationAtHome',data).subscribe((resrveVal:any)=>{
      this.alert.onSuccess(resrveVal.message,'DISMISS');
      this.router.navigate(['/dashboard']);
    },error=>{
      this.alert.onError('Priest reservation not done, Please try again later!','DISMISS');
    })
  }


  

}
