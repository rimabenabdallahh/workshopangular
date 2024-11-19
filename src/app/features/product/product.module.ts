import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from '../../components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductPipe } from 'src/app/pipe/filter-product.pipe';
import { FormProductComponent } from '../../components/form-product/form-product.component';
import { ListProductComponent } from 'src/app/components/list-product/list-product.component';
import { ValidationMessagesComponent } from 'src/app/validation-messages/validation-messages.component';

@NgModule({
  declarations: [ProductComponent, FilterProductPipe, FormProductComponent,ListProductComponent,ValidationMessagesComponent],
  imports: [CommonModule, ProductRoutingModule, FormsModule,ReactiveFormsModule],
})
export class ProductModule {}
