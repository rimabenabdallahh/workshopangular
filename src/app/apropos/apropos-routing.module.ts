import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';

const routes: Routes = [
  {path:'aprops',component:AproposComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AproposRoutingModule { }
