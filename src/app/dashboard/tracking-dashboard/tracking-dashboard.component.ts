import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tracking-dashboard',
  templateUrl: './tracking-dashboard.component.html',
  styleUrls: ['./tracking-dashboard.component.scss']
})
export class TrackingDashboardComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

}
