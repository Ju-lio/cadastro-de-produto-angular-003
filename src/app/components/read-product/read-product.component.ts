import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { State } from 'src/app/enums/state.enum';

@Component({
   selector: 'app-read-product',
   templateUrl: './read-product.component.html',
   styleUrls: ['./read-product.component.css'],
})
export class ReadProductComponent implements OnInit {
   products: Product[] = [];
   displayedColumns = ['id', 'name', 'price', 'actions'];
   readonly state = State;

   constructor(private productsService: ProductsService) {}

   ngOnInit(): void {
      this.productsService.read().subscribe(products => {
         this.products = products;
      });
   }

   getRouterByState(state: State, id: number): string {
      return `${state}/${id}`;
   }
}
