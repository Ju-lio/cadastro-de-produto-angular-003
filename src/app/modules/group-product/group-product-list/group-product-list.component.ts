import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Action } from 'src/app/enums/action.enum';
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
  destroy$: Subject<unknown> = new Subject();
  readonly action = Action;

  constructor(private groupProductsService: GroupProductService) {}

  ngOnInit(): void {
    this.groupProductsService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe(groupProduct => {
        this.groupProduct = groupProduct;
      });
  }
}
