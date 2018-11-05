import { Component } from '@angular/core';
import { AuthenticateService } from './Service/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authenticate: AuthenticateService) { }
  title = 'gym';
}
