import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import Utils from 'src/app/Utils/Utils';
import { IUser } from 'src/Models/IUser';
import { User } from 'src/Models/User'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _email:string = '';

  private _password:string = '';

 userInput = this.formBuilder.group(
    {
      email:'',
      password:''
    }
  );

  constructor(
    private authentication:AuthenticationService,
    private formBuilder:FormBuilder
    ) 
  { 
    
  }


  ngOnInit(): void 
  {
  }

  onSubmit():void
  {
    let user:IUser = new User(
      this.userInput.value.email,
      this.userInput.value.password,
      undefined,
      undefined,
      undefined);

    if(Utils.validateInput(user))
    {
      this.authentication.SignIn(user);

      this.userInput.reset();
    }
  }

  get email():string
  {
    return this._email;
  }

  get password():string
  {
    return this._password;
  }

  set email(value:string)
  {
    this._email = value;
  }

  

}
