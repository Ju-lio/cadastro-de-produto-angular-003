import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductsComponent } from './modules/products/products.component';

const routes: Routes = [
   {
      path: '',
      component: HomeComponent,
   },
   {
      path: 'products',
      component: ProductsComponent,
   },
   {
      path: 'products/create',
      component: CreateProductComponent,
   },
   {
      path: 'products/update/:id',
      component: UpdateProductComponent,
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
