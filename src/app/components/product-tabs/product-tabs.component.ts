import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
   selector: 'app-product-tabs',
   templateUrl: './product-tabs.component.html',
   styleUrls: ['./product-tabs.component.css'],
})
export class ProductTabsComponent {
   constructor(private router: Router) {}

   onTabChanged(event: MatTabChangeEvent): void {
      switch (event.index) {
         case 0:
            this.router.navigate(['/products']);
            break;
         case 1:
            this.router.navigate(['/products/create/0']);
            break;
      }
   }
}
