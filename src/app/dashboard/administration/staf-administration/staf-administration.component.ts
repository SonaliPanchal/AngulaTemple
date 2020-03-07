import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-staf-administration',
  templateUrl: './staf-administration.component.html',
  styleUrls: ['./staf-administration.component.scss']
})
export class StafAdministrationComponent implements OnInit {
 
  constructor(private location:Location) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

}
