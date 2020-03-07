import { Component, OnInit } from '@angular/core';
import {MDCMenu} from '@material/menu';
import { CookieService } from 'ngx-cookie-service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu:any;
  userDataVal:any = {};
  user_fullName:any='';
  constructor(private cookieService:CookieService,private router:Router) { 
  this.userDataVal = localStorage.getItem('userData');
  this.userDataVal = JSON.parse(this.userDataVal);
  if(this.userDataVal)
    this.user_fullName = this.userDataVal.full_name;
  }

  ngOnInit() {
    // console.log(this.userDataVal);
    if(localStorage.getItem('userData') && this.user_fullName!='')
       this.menu = new MDCMenu(document.querySelector('.mdc-menu'));
  }
  openMenu(){
    if(this.user_fullName!='')
       this.menu.open = true;
    // this.menu.show();
  }
  logOut(){
    this.cookieService.delete('UserToken');
        localStorage.removeItem('userData');
        localStorage.removeItem("po_stataus");
        localStorage.removeItem("items");
        localStorage.removeItem("po_data");
        this.cookieService.delete( 'UserToken');
        let self = this
        setTimeout(() => {
            self.router.navigate(['/login'])
        }, 500)
  }

}
