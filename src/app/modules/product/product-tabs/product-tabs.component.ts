import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-product-tabs',
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.css'],
})
export class ProductTabsComponent {
  constructor() {}

  onTabChanged(event: MatTabChangeEvent): void {
    switch (event.index) {
      case 0:
        break;
      case 1:
        break;
    }
  }
}
