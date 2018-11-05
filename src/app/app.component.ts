import { Component } from '@angular/core';
import { AuthenticateService } from './Service/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authenticate: AuthenticateService) { }
  title = 'gym';
}
