import { IUser } from "./IUser";
import { Product } from "./Product";

export class User implements IUser
{
    private _id?: number;

    _email:string;

    _password:string;

    _name?:string;

    _firstName?:string;

    private _products: Product[] = [];
   
    constructor(email:string,password:string,name?:string,firstName?:string,id?:number)
    {
        this._id = id;
        this._email = email;
        this._password = password;
        this._name = name;
        this._firstName = firstName;
    }

    get email():string
    {
        return this._email;
    }

    set email(value:string)
    {
        this._email = value;
    }

    get password():string
    {
        return this._password;
    }

    set password(value:string)
    {
        this._password = value;
    }

    get name():string|undefined
    {
        return this._name;
    }

    set name(value:string|undefined)
    {
        this.name = value;
    }

    get firstName():string|undefined
    {
        return this._firstName;
    }

    set firstName(value:string|undefined)
    {
        this._firstName = value;
    }

    public get products(): Product[] 
    {
        return this._products;
    }
    public set products(value: Product[]) 
    {
        this._products = value;
    }

    public get id(): number | undefined
    {
        return this._id;
    }
    public set id(value: number | undefined) 
    {
        this._id = value;
    }
}
