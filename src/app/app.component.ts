import { Component } from '@angular/core';
import { CookieModule } from 'ngx-cookie';
import { AuthenticationService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _title:string;

  constructor(private authenticationService:AuthenticationService,
    private CookieService:CookieModule)
  {
    this._title = "Aplicatie - Restaurant ";
  }

  get Title()
  {
    return this._title;
  }


  get IsLoggedIn():boolean
  {
    return this.authenticationService.IsLoggedIn;
  }


}
