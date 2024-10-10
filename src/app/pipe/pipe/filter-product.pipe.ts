import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(values:Product[], search:string): any {
    if (search=='')
      return values;
    return values.filter((e) =>e.name.toLowerCase().includes(search.toLowerCase()) ||
     e.brand.toLowerCase()==search.toLowerCase() || e.price==Number(search));
  }

}
