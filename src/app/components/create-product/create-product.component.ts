import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { RoutinesService } from 'src/app/services/routines.service';

@Component({
   selector: 'app-create-product',
   templateUrl: './create-product.component.html',
   styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
   product: Product = {
      name: '',
      price: 0,
   };

   inTransaction: boolean = false;

   constructor(
      private productsService: ProductsService,
      private router: Router,
      private routines: RoutinesService
   ) {}

   back() {
      this.router.navigate(['/products']);
   }

   createProduct() {
      this.inTransaction = true;
      setTimeout(() => {
         this.productsService.create(this.product).subscribe(() => {
            this.routines.atention('Produto criado com sucesso!', 'Fechar');
            this.inTransaction = false;
            // this.back();
         });
      }, 3000);
   }
}
