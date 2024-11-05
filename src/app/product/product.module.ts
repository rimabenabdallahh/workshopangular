import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductPipe } from '../pipe/pipe/filter-product.pipe';
import { FormProductComponent } from './form-product/form-product.component';

@NgModule({
  declarations: [
    ProductsComponent,
    FilterProductPipe,
    FormProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class ProductModule { }
