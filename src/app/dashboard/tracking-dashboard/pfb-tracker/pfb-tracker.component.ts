import { Component, OnInit } from '@angular/core';
import { Location }from '@angular/common';

@Component({
  selector: 'app-pfb-tracker',
  templateUrl: './pfb-tracker.component.html',
  styleUrls: ['./pfb-tracker.component.scss']
})
export class PfbTrackerComponent implements OnInit {
  p:number=1;
  constructor(private location:Location) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

}
