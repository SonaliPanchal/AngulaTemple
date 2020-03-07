import { Injectable } from '@angular/core';
import { CanActivate ,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router,NavigationEnd } from '@angular/router';
import { AlertService } from './alert.service'
import { CookieService } from 'ngx-cookie-service';
import * as _ from "lodash";
// var inflection = require( 'inflection' );

@Injectable()
export class AuthGuard implements CanActivate {
    permissions:any = [];
    constructor(private router: Router,private alert:AlertService) {
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (localStorage.getItem('userData')) {
          // logged in so return true
          return true;
      }else{
        this.alert.onError('Please login to continue!','DISMISS');
        this.router.navigate(['/login']);
        // this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
        return false;
      }
  }
}
