import { Component, OnInit } from '@angular/core';
import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';
import { MDCSelect } from '@material/select';
import { ApiServiceService } from '../services/api-service.service';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formObj:any={username:'',email:'',password:'',full_name:'',role_id:null};

  constructor(private loading:LoadingBarService,private apiservice:ApiServiceService,private alert:AlertService,private router:Router,private location:Location) { }

  ngOnInit() {
    const fullName = new MDCTextField(document.querySelector('.fullName'));
    const username = new MDCTextField(document.querySelector('.username'));
    const email = new MDCTextField(document.querySelector('.email'));
    const password = new MDCTextField(document.querySelector('.password'));
    const role = new MDCSelect(document.querySelector('.role'));
    const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
  }


  signUp(){
    this.formObj.role_id = parseInt(this.formObj.role_id)
    this.apiservice.POSTAdmin('adminRegister',this.formObj).subscribe((postedData:any)=>{
      // console.log(postedData);
      this.formObj = {username:'',email:'',password:'',full_name:'',role_id:null};
      this.alert.onSuccess(postedData.message,'DISMISS');
      this.router.navigate(['/login'])
    },error=>{
      this.alert.onError('Registration failed, Please try again!','DISMISS')
      console.log(JSON.stringify(error));
    })
  }

  back(){
    this.location.back();
  }

}
