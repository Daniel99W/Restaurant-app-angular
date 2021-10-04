import { Injectable } from '@angular/core';
import { CookieModule } from 'ngx-cookie';
import { IUser } from 'src/Models/IUser';
import { RegisteredUsersService } from '../registered-users/registered-users.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _LoggedUser?:IUser;

  private _IsLoggedIn:boolean;

  constructor(private registeredUsersService:RegisteredUsersService)
  {
    this._LoggedUser = undefined;

    this._IsLoggedIn = false;
  }

  get LoggedUser():IUser|undefined
  {
    return this._LoggedUser;
  }

  set LoggedUser(value:IUser|undefined)
  {
      this._LoggedUser = value;
  }

  get IsLoggedIn():boolean
  {
    return this._IsLoggedIn;
  }

  set IsLoggedIn(value:boolean)
  {
    this._IsLoggedIn = value;
  }


  public SignIn(user:IUser)
  {
    console.log(user);

    if(this.registeredUsersService.RegUsers.some(regUser=>
      regUser.email==user.email 
      && regUser.password==regUser.password))
    {
      this._LoggedUser = user;

      this._IsLoggedIn = true;
    }

  }

  public SignOut()
  {
    this._IsLoggedIn = false;

    this.LoggedUser = undefined;
  }
  


}
