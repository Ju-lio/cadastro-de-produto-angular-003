import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
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
      component: ProductFormComponent,
   },
   {
      path: 'products/:operation/:id',
      component: ProductFormComponent,
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
