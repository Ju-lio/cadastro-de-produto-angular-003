import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-product-tabs',
  templateUrl: './group-product-tabs.component.html',
  styleUrls: ['./group-product-tabs.component.css'],
})
export class GroupProductTabsComponent {
  constructor(private router: Router) {}

  onTabChanged(event: MatTabChangeEvent): void {
    switch (event.index) {
      case 1:
        this.router.navigate(['group-product', 'new']);
    }
  }
}
