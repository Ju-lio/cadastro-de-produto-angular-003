import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/enums/state.enum';
import { GroupProduct } from 'src/app/models/group-product.model';
import { GroupProductService } from 'src/app/services/group-product.service';

@Component({
   selector: 'app-group-product-list',
   templateUrl: './group-product-list.component.html',
   styleUrls: ['./group-product-list.component.css'],
})
export class GroupProductListComponent implements OnInit {
   groupProduct: GroupProduct[] = [];
   displayedColumns = ['id', 'name', 'actions'];
   readonly state = State;

   constructor(private groupProductsService: GroupProductService) {}

   ngOnInit(): void {
      this.groupProductsService.getAll().subscribe(groupProduct => {
         this.groupProduct = groupProduct;
      });
   }

   getRouterByState(state: State, id: number): string {
      return `${state}/${id}`;
   }
}
