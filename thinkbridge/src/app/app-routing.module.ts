import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  {
    path: 'loginorsignup', component: LoginComponent
  },
  {
    path: 'productdashboard', component: ProductDashboardComponent
  },
  {
    path: 'addProduct', component: CreateProductComponent
  },
  {
    path: 'editProduct/:productId', component: EditProductComponent
  },
  {
    path: '', redirectTo: 'loginorsignup', pathMatch: 'full'
  },
  {
    path: 'viewProduct/:productId', component: ViewProductComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
