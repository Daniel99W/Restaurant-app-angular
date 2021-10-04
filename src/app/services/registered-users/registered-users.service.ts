import { Injectable } from '@angular/core';
import { CookieModule } from 'ngx-cookie';
import { IUser } from 'src/Models/IUser';
import { Product } from 'src/Models/Product';
import { User } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})
export class RegisteredUsersService {

  private _regUsers:IUser[];

  constructor() 
  { 
    this._regUsers = 
    [
      new User("daniel.costache@student.unitbv.ro","Daniel123","Costache","Daniel",1),
      new User("valentin.razvan@student.unitbv.ro","Razvan123","Valentin","Razvan",2)
    ]
  }


  get RegUsers():IUser[]
  {
    return this._regUsers;
  }

  public AddUser(user:IUser)
  {
    this._regUsers.push(user);
  }


}
