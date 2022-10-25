import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { RoutinesService } from 'src/app/services/routines.service';

@Component({
   selector: 'app-update-product',
   templateUrl: './update-product.component.html',
   styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
   product!: Product;

   inTransaction: boolean = false;

   constructor(
      private productsService: ProductsService,
      private router: Router,
      private routines: RoutinesService,
      private route: ActivatedRoute
   ) {}

   ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.productsService.readById(id ? id : '').subscribe(product => {
         this.product = product;
      });
   }

   back() {
      this.router.navigate(['/products']);
   }

   updateProduct() {
      this.inTransaction = true;
      this.productsService.update(this.product).subscribe(() => {
         this.routines.atention('Produto atualizado com sucesso!', 'Fechar');
         this.back();
         this.inTransaction = false;
      });
   }
}
