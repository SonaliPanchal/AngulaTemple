import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public loader: LoadingBarService) { }

  ngOnInit() {
  }

}
