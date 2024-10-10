import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { FilterProductPipe } from '../pipe/pipe/filter-product.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    FilterProductPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,

  ]
})
export class ProductModule { }
