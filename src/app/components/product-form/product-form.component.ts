import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from 'src/app/enums/state.enum';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
   selector: 'app-product-form',
   templateUrl: './product-form.component.html',
   styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
   showId: boolean = false;
   inTransaction: boolean = false;
   state!: State;

   readonly operation = {
      [State.CREATE]: {
         submit: (product: Product) => this.productsService.create(product),
         init: () => this.initCreate(),
      },
      [State.UPDATE]: {
         submit: (product: Product) => this.productsService.update(product),
         init: () => this.initUpdate(),
      },
      [State.BROWSE]: {
         submit: (product: Product) => this.productsService.browse(product),
         init: () => this.initBrowse(),
      },
      [State.DELETE]: {
         submit: (product: Product) => this.productsService.delete(product),
         init: () => this.initDelete(),
      },
      [State.UNDEFINED]: {
         submit: (product: Product) => this.productsService.undefined(product),
         init: () => this.initUndefined(),
      },
   };

   product: Product = {
      name: '',
      price: 0,
   };

   constructor(
      private productsService: ProductsService,
      private router: Router,
      private route: ActivatedRoute
   ) {}

   getProduct() {
      const id = this.route.snapshot.paramMap.get('id');
      this.productsService.readById(id ? id : '').subscribe(product => {
         this.product = product;
      });
   }

   getState(): State {
      const state = this.route.snapshot.paramMap.get('operation');
      return Object.values(State).includes(state) ? state : State.UNDEFINED;
   }

   ngOnInit(): void {
      this.operation.[this.state].init();
   }

   back() {
      this.router.navigate(['/products']);
   }

   submit() {
      this.inTransaction = true;
      this.operation[this.state].submit(this.product).subscribe(() => {
         this.productsService.atention(this.state);
         this.inTransaction = false;
      });
   }

   initCreate() {
      console.log();
   }

   initUpdate() {
      console.log();
   }

   initBrowse() {
      console.log();
   }

   initDelete() {
      console.log();
   }

   initUndefined() {
      console.log();
   }
}
