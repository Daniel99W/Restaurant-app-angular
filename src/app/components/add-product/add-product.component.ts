import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';
import { RegisteredUsersService } from 'src/app/services/registered-users/registered-users.service';
import { Product } from 'src/Models/Product';
import { User } from 'src/Models/User';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  private _productName: string = '';
  
  private _productPrice: number = 0;

  private _userName: string = '';
  
  userInput = this.formBuilder.group({
    productName:'',
    productPrice:'',
    userName:'',
  })
  
  constructor(
    private registeredUsersService:RegisteredUsersService,
    private productsService:ProductsService,
    private formBuilder:FormBuilder) 
    { 

    }

  ngOnInit(): void
  {

  }

  public get productName(): string
  {
    return this._productName;
  }
  public set productName(value: string) 
  {
    this._productName = value;
  }

  public get productPrice(): number
  {
    return this._productPrice;
  }

  public set productPrice(value: number) 
  {
    this._productPrice = value;
  }

  public get userName(): string {
    return this._userName;
  }
  public set userName(value: string) {
    this._userName = value;
  }

  public onSubmit():void
  { 
    let userId:number | undefined  =
    (this.registeredUsersService.RegUsers.find(user=>user.name==this.userInput.value.userName) as User).id;

    let productId = this.productsService.products.length+1;

    let product:Product = new Product(productId,this.userInput.value.productName,this.userInput.value.productPrice,userId);

    this.productsService.products.push(product);

  }


}
