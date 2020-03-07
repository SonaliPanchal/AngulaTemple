import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private router:Router) { }

  applyFilter(data:any,dataArr:any,keyField:any){
    var returnArr = [];
    dataArr.forEach(function(val){
      if(val[keyField] === data){
        returnArr.push(val)
      }
    })
    return returnArr;
  }


}
