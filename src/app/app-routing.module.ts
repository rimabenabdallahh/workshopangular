import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:"products/:id",component:ProductModule},
  {path:"**",component:NotFoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
