import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-leave-dashboard-tracker',
  templateUrl: './leave-dashboard-tracker.component.html',
  styleUrls: ['./leave-dashboard-tracker.component.scss']
})
export class LeaveDashboardTrackerComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }
}
