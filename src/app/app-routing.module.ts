import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './product/products/products.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { MainUserComponent } from './main-user/main-user.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"category/add",component :FormCategoryComponent},
  {path:"user/add",component :MainUserComponent},
  {path:"category/update/:object",component :FormCategoryComponent},
  
  {path:"",redirectTo:'/home',pathMatch:'full'},
  
  {path:'products',loadChildren:()=>
    import('./product/product.module')
    .then((m)=> m.ProductModule)

  },
  {path:'aprops',loadChildren:()=>
    import('./apropos/apropos.module')
    .then((m)=> m.AproposModule)

  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
