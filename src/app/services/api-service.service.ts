import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpHeaders } from "@angular/common/http"
import { environment } from '../../environments/environment';
import { RouterModule, Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';
import "rxjs/Rx"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { throwError } from 'rxjs';



var api = 'http://139.59.45.232:3000/api';
var adminApi = 'http://139.59.45.232:3000/admin';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private router: Router, private http: HttpClient, private loading: LoadingBarService) { }
  Login(end_point, data) {
    let headers = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                // 'Authorization': "Basic " + basic
            })
    }
    // NProgress.start();
    return this.http.post(adminApi + '/' + end_point, data, headers).map(this.onSuccess).catch(this.onError);
}

  GET(end_point) {
    let headers = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
        })
    }
    // NProgress.set(0.2);
    this.loading.start()
    return this.http.get(api + '/' + end_point).map(this.onSuccess).catch(this.onError);
  }
  asyncGET(end_point){
    return this.http.get(api + '/' + end_point).map(this.onSuccess).catch(this.onError);
  }

  asyncPOST(end_point,data){
    return this.http.post(api + '/' + end_point, data).map(this.onSuccess).catch(this.onError);  
  }

  POSTAdmin(end_point, data) {
    this.loading.start();
    return this.http.post( adminApi+'/' + end_point, data).map(this.onSuccess).catch(this.onError);
  }
  POST(end_point, data) {
    this.loading.start()
    return this.http.post(api + '/' + end_point, data).map(this.onSuccess).catch(this.onError);
  }

  private onSuccess(res: Response) {
    // this.loading.complete();
    return res;
  }

  private onError(error: any) {
    // this.loading.complete();
    return Observable.throwError(error);
  }


  //reload page
  reloadRoute(path){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([path]);
  }
}
