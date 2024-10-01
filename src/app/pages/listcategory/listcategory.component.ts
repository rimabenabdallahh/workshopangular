import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent {
  title:string=''
  categories :Category[]=[{"id":1,"title":"Grand électroménager",
    "image":"assets/images/product.jpg",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, mollitia.",
    "available":true},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/images/categorie_petit_electromenager.jpg", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet modi delectus minus, aperiam earum architecto inventore ipsum! Est, laudantium amet",
    "available":true},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/images/categorie_produits_informatiques.jpg", "description":"",
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
    "description":"", "available":true},
    {"id":5,"title":"TV, images et son",
    "image":"assets/images/categorie_tv_image_son.jpg", "description":"",
    "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
    "description":"","available":false},];

    afficheDescription(id:number)
    {this.categories.forEach(element => {
      if(element.id==id){
        alert(element.description)
    }
  } )
}

}
