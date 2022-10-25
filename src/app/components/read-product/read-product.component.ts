import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import {
   MatDialog,
   MatDialogRef,
   MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
   selector: 'app-read-product',
   templateUrl: './read-product.component.html',
   styleUrls: ['./read-product.component.css'],
})
export class ReadProductComponent implements OnInit {
   products: Product[] = [];
   displayedColumns = ['id', 'name', 'price', 'acoes'];

   constructor(
      private dialog: MatDialog,
      private productsService: ProductsService
   ) {}

   ngOnInit(): void {
      this.productsService.read().subscribe(products => {
         this.products = products;
      });
   }

   deleteConfirm(id: string) {
      const dialogRef = this.openDialog(MatDialogRef);

      dialogRef.afterClosed().subscribe(() => {
         this.productsService.delete(id);
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
