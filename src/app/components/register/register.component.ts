import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { RegisteredUsersService } from 'src/app/services/registered-users/registered-users.service';
import Utils from 'src/app/Utils/Utils';
import { IUser } from 'src/Models/IUser';
import { User } from 'src/Models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private _email?: string | undefined;
  
  private _password?: string | undefined;
  
  private _name?: string | undefined;

  private _secondPassword: string | undefined;
 
  private _firstName?: string | undefined;
  

  userInput = this.formBuilder.group(
    {
      email:'',
      password:'',
      secondPassword:'',
      name:'',
      firstName:'',
    }
  );

  constructor(
    private authentication:AuthenticationService,
    private formBuilder:FormBuilder,
    private registeredUsersService:RegisteredUsersService
    ) 
  { 
    
  }

  ngOnInit(): void {
  }


  onSubmit()
  {

    let userId = this.registeredUsersService.RegUsers.length+1;

    let user:IUser = new User(this.userInput.value.Email,this.userInput.value.password,
      this.userInput.value.Name,this.userInput.value.FirstName,userId);

      if(Utils.validateInput(user))
      {
        this.registeredUsersService.AddUser(user);

        this.authentication.LoggedUser = user;

        this.authentication.IsLoggedIn = true;
      }

  }

  public get email(): string | undefined 
  {
    return this._email;
  }
  public set email(value: string | undefined) 
  {
    this._email = value;
  }

  public get password(): string | undefined 
  {
    return this._password;
  }
  public set password(value: string | undefined) 
  {
    this._password = value;
  }

  public get name(): string | undefined 
  {
    return this._name;
  }
  public set name(value: string | undefined) 
  {
    this._name = value;
  }

  public get firstName(): string | undefined 
  {
    return this._firstName;
  }
  public set firstName(value: string | undefined) 
  {
    this._firstName = value;
  }

  public get secondPassword(): string | undefined 
  {
    return this._secondPassword;
  }
  public set secondPassword(value: string | undefined) {
    
    this._secondPassword = value;
  }






}
