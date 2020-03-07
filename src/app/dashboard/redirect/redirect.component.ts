import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  } 
  back(){
    this.location.back();
  }

}
