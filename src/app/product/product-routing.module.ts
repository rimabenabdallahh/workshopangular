import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FormProductComponent } from './form-product/form-product.component';

const routes: Routes = [
  {path:"add",component:FormProductComponent},
  {path:":id",component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class ProductRoutingModule { }
