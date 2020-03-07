import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-po-tracker',
  templateUrl: './po-tracker.component.html',
  styleUrls: ['./po-tracker.component.scss']
})
export class PoTrackerComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

}
