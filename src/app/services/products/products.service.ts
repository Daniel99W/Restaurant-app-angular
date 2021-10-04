import { Injectable } from '@angular/core';
import { Product } from 'src/Models/Product';
import { RegisteredUsersService } from '../registered-users/registered-users.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService 
{

  private _products: Product[] = 
  [
    new Product(1,"Pizza",23,1),
    new Product(2,"Panini",50,1),
    new Product(3,"Zahar",50,2),
  ]
  
  constructor(private registeredUsersService:RegisteredUsersService) 
  { 

  }

  public get products(): Product[] 
  {
    return this._products;
  }
  public set products(value: Product[]) 
  {
    this._products = value;
  }






}
