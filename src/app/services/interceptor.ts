import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor{

    constructor(/*private cookieService:CookieService, */private router:Router,private loading: LoadingBarService){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('user');
        return next.handle(request)
            .do(event => {

                if (event instanceof HttpResponse) {
                    this.loading.complete();
                    return event;
                }
            })
            .catch((err) => {
                this.loading.complete();
                console.log(JSON.stringify(err));
                if (err.status == 401 || err.statusText === 'Unauthorized') {
                    // console.log(JSON.stringify(err),'intercepter');
                    // this.cookieService.delete('UserToken');
                    // localStorage.removeItem('user');
                    // this.router.navigate(['/login']);
                }
                return Observable.throw(err);
            });
        }
}