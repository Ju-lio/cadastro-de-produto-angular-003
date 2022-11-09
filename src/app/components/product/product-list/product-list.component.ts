import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { State } from 'src/app/enums/state.enum';
import { ProductService } from 'src/app/services/product.service';
import { GroupProductService } from 'src/app/services/group-product.service';
import { GroupProduct } from 'src/app/models/group-product.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
   selector: 'app-product-list',
   templateUrl: './product-list.component.html',
   styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
   products: Product[] = [];
   groupProducts: GroupProduct[] = [];
   groupProductSelected?: number;
   displayedColumns = ['id', 'name', 'price', 'actions'];
   destroy$: Subject<unknown> = new Subject();
   readonly state = State;

   constructor(
      private productsService: ProductService,
      private groupProductsService: GroupProductService
   ) {}

   ngOnInit(): void {
      this.productsService
         .getAll()
         .pipe(takeUntil(this.destroy$))
         .subscribe(product => {
            this.products = product;
         });
      this.groupProductsService
         .getAll()
         .pipe(takeUntil(this.destroy$))
         .subscribe(groupProduct => {
            this.groupProducts = groupProduct;
         });
   }

   process() {
      this.productsService
         .getAll()
         .pipe(takeUntil(this.destroy$))
         .subscribe(products => {
            this.products = products;
            if (this.groupProductSelected) {
               this.products = this.products.filter(
                  products => products.group == this.groupProductSelected
               );
            }
         });
   }

   getRouterByState(state: State, id: number): string {
      return `${state}/${id}`;
   }
}
