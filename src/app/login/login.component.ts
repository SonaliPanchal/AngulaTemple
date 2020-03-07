import { Component, OnInit } from '@angular/core';
import {MDCTextField} from '@material/textfield';
import { Router,ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';
import { ApiServiceService } from '../services/api-service.service';
import { AlertService } from '../services/alert.service';
import { LoadingBarService } from '@ngx-loading-bar/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:any = {};
  constructor(private loader:LoadingBarService,public router: Router,private activetRoute:ActivatedRoute,private apiservice: ApiServiceService,private alert:AlertService,private cookieService: CookieService) { 
    let userData:any = JSON.parse(localStorage.getItem('userData'));
    let token = this.cookieService.get('UserToken');
    if (token.length && userData) {
        this.router.navigate(['/dashboard']);
        return;   
    }  
  }

  ngOnInit() {
    const username = new MDCTextField(document.querySelector('.username'));
    const password = new MDCTextField(document.querySelector('.password'));
  }

  encryptPassword(value){
    var encrypt = CryptoJS.AES.encrypt(value, 'LOGIN');
    return encrypt;
}

decryptPassword(value){
    var bytes  = CryptoJS.AES.decrypt(value.toString(), 'LOGIN');
    var text = bytes.toString(CryptoJS.enc.Utf8);
    return text;

}
  onLogin(form) {
    this.login = {
      email:form.name,
      password:form.password
    }
    // console.log("login",this.login);
     this.apiservice.Login('adminLogin',this.login).subscribe(
         (token:any) => {
           this.alert.onSuccess(token.message,'DISMISS');
          // console.log("token",token);
            if(token.data){
             
                    let User:any={username:null,full_name:null,role_id:null,status:null,poNo:null};
                    let loGinUser = token.data;
                    let created:any, updated:any, mail_sent:any, userId:any;
                    User.username=loGinUser.username?loGinUser.username:null;
                    User.full_name=loGinUser.full_name?loGinUser.full_name:null;
                    User.role_id=loGinUser.role_id?loGinUser.role_id:null;
                    User.status=loGinUser.status?loGinUser.status:null;
                    User.poNo = loGinUser.POData?loGinUser.POData.po_no:null;
                    var poStatus = loGinUser.po_status?loGinUser.po_status:null;
                    var items = loGinUser.items?loGinUser.items:null;
                    var poData = loGinUser.POData?loGinUser.POData:null;
                    localStorage.setItem("userData",JSON.stringify(User));
                    localStorage.setItem("po_stataus",JSON.stringify(poStatus));
                    localStorage.setItem("items",JSON.stringify(items));
                    localStorage.setItem("po_data",JSON.stringify(poData));
                    this.cookieService.delete( 'UserToken');
                    this.cookieService.set( 'UserToken', this.encryptPassword(loGinUser.email), new Date(Date.now() + (48*60*60*1000)) );
                    this.cookieService.set('lastLogin','login');
                    this.router.navigate(['/dashboard']);
            }else{
              this.alert.onError(token.message?token.message:'Something went wrong','DISMISS');
            }
         },
         (error) => {
             console.log(JSON.stringify(error))                
              this.alert.onError(error.error && error.error.message ? error.error.message : 'Something went wrong','DISMISS');
         }
     );
 }

}
