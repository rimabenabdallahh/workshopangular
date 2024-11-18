import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  @Input() data!:Product;
  @Output() buyEvent = new EventEmitter<number>();
  @Output() incrementEvent = new EventEmitter<number>();
  @Output() addEvent = new EventEmitter<object>();

  buy() {
    this.buyEvent.emit(this.data.id); 
  }

  increment() {
    this.incrementEvent.emit(this.data.id);  
  }
  add() {
    this.addEvent.emit(this.data); 
  }
}
