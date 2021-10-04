import { IUser } from "src/Models/IUser";

export default class Utils
{
static hasSomeChar(str:string,fn:(char:string)=>boolean):boolean
  {
    for(let i = 0;i<str.length;++i)
    {
      if(fn(str[i]))
        return true;
    }

    return false;
  }

static validateInput(user:IUser):boolean
  {
    return user.password.length >= 6 && 
    this.hasSomeChar(user.email,char=>
      {
        if(char==char.toUpperCase())
          return true;

        return false;
      }) &&
    this.hasSomeChar(user.password,char=>
      {
        if(char==char.toLowerCase())
          return true;

        return false;
      }) &&
    this.hasSomeChar(user.password,char=>
      {
        return !isNaN(parseFloat(char));
      }) ;
  }
}