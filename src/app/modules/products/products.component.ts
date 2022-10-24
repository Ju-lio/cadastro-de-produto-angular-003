import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'app-products',
   templateUrl: './products.component.html',
   styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
   constructor(private router: Router) {}

   goToProductCreate(): void {
      this.router.navigate(['/products/create']);
   }
}
