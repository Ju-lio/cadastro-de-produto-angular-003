import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { State } from 'src/app/enums/state.enum';
import { Button } from 'src/app/models/button.model';
import { Input } from 'src/app/models/input.model';
import { Operation } from 'src/app/models/operation.model';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
   selector: 'app-product-form',
   templateUrl: './product-form.component.html',
   styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
   state!: State;
   title!: string;

   inputId: Input = {
      disabled: false,
      visible: true,
   };

   inputName: Input = {
      disabled: false,
      visible: true,
   };

   inputPrice: Input = {
      disabled: false,
      visible: true,
   };

   buttonConfirm: Button = {
      caption: 'Confirmar',
      color: 'accent',
      disabled: false,
      visible: true,
   };

   buttonCancel: Button = {
      caption: 'Cancelar',
      color: 'warn',
      disabled: false,
      visible: true,
   };

   readonly operation: Operation = {
      [State.CREATE]: {
         submit: (product: Product) => this.productsService.create(product),
         init: () => this.initCreate(),
         successMessage: () => this.productsService.successMessageCreate(),
      },
      [State.UPDATE]: {
         submit: (product: Product) => this.productsService.update(product),
         init: () => this.initUpdate(),
         successMessage: () => this.productsService.successMessageUpdate(),
      },
      [State.BROWSE]: {
         submit: (product: Product) => EMPTY,
         init: () => this.initBrowse(),
         successMessage: () => null,
      },
      [State.DELETE]: {
         submit: (product: Product) => this.productsService.delete(product),
         init: () => this.initDelete(),
         successMessage: () => this.productsService.successMessageDelete(),
      },
      [State.UNDEFINED]: {
         submit: (product: Product) => this.productsService.undefined(product),
         init: () => this.initUndefined(),
         successMessage: () => this.productsService.successMessageUndefined(),
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

   setState(state: State) {
      this.state = state;
   }

   initialize(state: string) {
      const indexOfState = Object.values(State).indexOf(state as unknown as State);
      const key = Object.keys(State)[indexOfState];
      return new Observable(subscriber => {
         subscriber.next(this.setState(key ? State[key as keyof typeof State] : State.UNDEFINED));
      });
   }

   ngOnInit(): void {
      const state = this.route.snapshot.paramMap.get('operation');
      this.initialize(state ?? State.UNDEFINED).subscribe(() => {
         this.operation[this.state].init();
      });
   }

   back() {
      this.router.navigate(['/products']);
   }

   submit() {
      this.disableAll(true);
      this.operation[this.state].submit(this.product).subscribe(() => {
         this.operation[this.state].successMessage();
         this.back();
      });
   }

   disableInputs(disable: boolean) {
      this.inputId.disabled = disable;
      this.inputName.disabled = disable;
      this.inputPrice.disabled = disable;
   }

   disableAll(disable: boolean) {
      this.buttonConfirm.disabled = disable;
      this.buttonCancel.disabled = disable;
      this.disableInputs(disable);
   }

   setProduct(id: string) {
      this.productsService.readById(id).subscribe(product => {
         this.product = product;
      });
   }

   initCreate() {
      this.title = 'Novo produto';
      this.inputId.visible = false;
   }

   initUpdate() {
      this.title = 'Editar produto';
      this.inputId.disabled = true;
      this.setProduct(this.route.snapshot.paramMap.get('id') ?? '');
   }

   initBrowse() {
      this.title = 'Consultar produto';
      this.buttonConfirm.visible = false;
      this.buttonCancel = {
         caption: 'Voltar',
         color: 'accent',
         disabled: false,
         visible: true,
      };
      this.disableInputs(true);
      this.setProduct(this.route.snapshot.paramMap.get('id') ?? '');
   }

   initDelete() {
      this.title = 'Deletar produto';
      this.setProduct(this.route.snapshot.paramMap.get('id') ?? '');
      this.disableInputs(true);
      this.buttonConfirm = {
         color: 'warn',
         caption: 'Deletar',
         disabled: false,
         visible: true,
      };
      this.buttonCancel = {
         color: 'accent',
         caption: 'Cancelar',
         disabled: false,
         visible: true,
      };
   }

   initUndefined() {
      this.title = 'Operação não definida';
      this.disableAll(true);
   }
}
