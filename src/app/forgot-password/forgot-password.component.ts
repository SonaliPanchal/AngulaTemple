import { Component, OnInit } from '@angular/core';
import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';
import { ApiServiceService } from '../services/api-service.service';
import {Location} from '@angular/common'
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private loader:LoadingBarService,private router:Router,private apiservice:ApiServiceService,private location:Location,private alert:AlertService) { }

  ngOnInit() {
    const email = new MDCTextField(document.querySelector('.email'));
    const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
  }


  resetPasword(data){
    this.apiservice.POSTAdmin('forgetPassword',data).subscribe((reset:any)=>{
      this.alert.onSuccess(reset.message,'DISMISS');
      this.router.navigate(['/login']);
    },error=>{
      console.log(JSON.stringify(error));
      this.alert.onError('Password not reset, Try again later!','DISMISS');
    })
  }
back(){
  this.location.back();
}
}

