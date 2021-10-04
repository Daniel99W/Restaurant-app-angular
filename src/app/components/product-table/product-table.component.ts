import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/Models/Product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  private _products: Product[];
  
  constructor(private productsService:ProductsService) 
  {
    this._products = productsService.products;
  }

  ngOnInit(): void 
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


  public OrderByPrice():void
  {
    this._products.sort((a,b)=>
    {
      if(a.price <= b.price)
      {
        return -1;
      }
      else
      {
        if(a.price == b.price)
        {
          return 0;
        }
        else
        {
          return 1;
        }
      }

    });
  }

  public OrderByName():void
  {
    this._products.sort((a,b)=>
    {
      if(a.productName <= b.productName)
      {
        return -1;
      }
      else
      {
        if(a.productName == b.productName)
        {
          return 0;
        }
        else
        {
          return 1;
        }
      }

    });

  }



}
