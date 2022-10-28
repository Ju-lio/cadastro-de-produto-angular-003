import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { State } from 'src/app/enums/state.enum';

@Component({
   selector: 'app-products',
   templateUrl: './products.component.html',
   styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
   constructor(private router: Router, private snackBar: MatSnackBar) {}

   goToProductCreate(): void {
      this.router.navigate(['/products/create']);
   }

   atention(state: string) {
      let message = '';
      switch (state) {
         case State.CREATE:
            message = 'Produto criado com sucesso!';
            break;
         case State.UPDATE:
            message = 'Produto alterado com sucesso!';
            break;
         case State.DELETE:
            message = 'Produto excluido com sucesso!';
            break;
         default:
            message = 'Procedimento executado com sucesso!';
            break;
      }
      this.snackBar.open(message, 'Fechar', {
         duration: 3000,
         horizontalPosition: 'right',
         verticalPosition: 'top',
      });
   }
}
