import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent {
  category!:Category;
  ngOnInit():void{
    this.category=new Category();
   // this.activated.params.subscribe({
    //  next:(param)=>
      // {if(param['objet']!= undefined) 
     //  {
      //   console.debug(param);
        // console.
     //  }
     //  } 
    // })
    //
  } 

  add() 
  {  this.category.available=true;
    console.log(this.category)}

}
