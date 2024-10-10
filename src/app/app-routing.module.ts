import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './product/products/products.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
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
 
