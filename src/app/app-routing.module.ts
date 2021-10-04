import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes =
[
  {path:'Login',component:LoginComponent},

  {path:'Register',component:RegisterComponent},

  {path:'ProductTable',component:ProductTableComponent},

  {path:'AddProduct',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
