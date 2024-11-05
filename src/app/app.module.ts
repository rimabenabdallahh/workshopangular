import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ListcategoryComponent } from './pages/listcategory/listcategory.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { HighlightDirective } from './highlight/highlight.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { FormUserComponent } from './form-user/form-user.component';
import { MainUserComponent } from './main-user/main-user.component';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListcategoryComponent,
    FilterPipe, 
   HighlightDirective,
    NotFoundComponent,
    FormCategoryComponent,
    FormUserComponent,
    MainUserComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TestComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
