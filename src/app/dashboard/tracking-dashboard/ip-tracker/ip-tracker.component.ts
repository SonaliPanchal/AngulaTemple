import { Component, OnInit } from '@angular/core';
import {Location } from '@angular/common';

@Component({
  selector: 'app-ip-tracker',
  templateUrl: './ip-tracker.component.html',
  styleUrls: ['./ip-tracker.component.scss']
})
export class IpTrackerComponent implements OnInit {
  p:number=1;
  constructor(private location:Location) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

}
