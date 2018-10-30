import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../Service/authenticate.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private authenticate: AuthenticateService) { }

  ngOnInit() {
  }

  logout() {
    this.authenticate.logOut();
  }


}
