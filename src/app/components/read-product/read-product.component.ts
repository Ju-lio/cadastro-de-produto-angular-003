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
}

export class DialogAnimationsExample {
   constructor(public dialog: MatDialog) {}

   openDialog(
      enterAnimationDuration: string,
      exitAnimationDuration: string
   ): void {
      this.dialog.open(DialogAnimationsExampleDialog, {
         width: '250px',
         enterAnimationDuration,
         exitAnimationDuration,
      });
   }
}

export class DialogAnimationsExampleDialog {
   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
