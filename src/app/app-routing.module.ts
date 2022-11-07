import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProductComponent } from './modules/product/product.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { GroupProductFormComponent } from './components/group-product/group-product-form/group-product-form.component';
import { GroupProductComponent } from './modules/group-product/group-product.component';

const routes: Routes = [
   {
      path: '',
      component: HomeComponent,
   },
   {
      path: 'product',
      component: ProductComponent,
   },
   {
      path: 'product/create',
      component: ProductFormComponent,
   },
   {
      path: 'product/:operation/:id',
      component: ProductFormComponent,
   },
   {
      path: 'group-product',
      component: GroupProductComponent,
   },
   {
      path: 'group-product/:operation/:id',
      component: GroupProductFormComponent,
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
