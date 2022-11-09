import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject, takeUntil } from 'rxjs';
import { State } from 'src/app/enums/state.enum';
import { Button } from 'src/app/models/button.model';
import { GroupProduct } from 'src/app/models/group-product.model';
import { Input } from 'src/app/models/input.model';
import { GroupProductService } from 'src/app/services/group-product.service';

export type Operation = {
   [key in State]: {
      submit: (product: GroupProduct) => Observable<GroupProduct>;
      init: () => void;
      successMessage: () => void;
   };
};

@Component({
   selector: 'app-group-product-form',
   templateUrl: './group-product-form.component.html',
   styleUrls: ['./group-product-form.component.css'],
})
export class GroupProductFormComponent implements OnInit {
   state!: State;
   title!: string;
   destroy$: Subject<unknown> = new Subject();

   inputId: Input = {
      disabled: false,
      visible: true,
   };

   inputName: Input = {
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
         submit: (groupProduct: GroupProduct) => this.groupProductsService.create(groupProduct),
         init: () => this.initCreate(),
         successMessage: () => this.groupProductsService.successMessageCreate(),
      },
      [State.UPDATE]: {
         submit: (groupProduct: GroupProduct) => this.groupProductsService.update(groupProduct),
         init: () => this.initUpdate(),
         successMessage: () => this.groupProductsService.successMessageUpdate(),
      },
      [State.BROWSE]: {
         submit: (groupProduct: GroupProduct) => EMPTY,
         init: () => this.initBrowse(),
         successMessage: () => null,
      },
      [State.DELETE]: {
         submit: (groupProduct: GroupProduct) => this.groupProductsService.delete(groupProduct),
         init: () => this.initDelete(),
         successMessage: () => this.groupProductsService.successMessageDelete(),
      },
      [State.UNDEFINED]: {
         submit: (groupProduct: GroupProduct) => this.groupProductsService.undefined(groupProduct),
         init: () => this.initUndefined(),
         successMessage: () => this.groupProductsService.successMessageUndefined(),
      },
   };

   groupProduct: GroupProduct = {
      name: '',
   };

   constructor(
      private groupProductsService: GroupProductService,
      private router: Router,
      private route: ActivatedRoute
   ) {}

   getProduct() {
      const id = this.route.snapshot.paramMap.get('id');
      this.groupProductsService
         .readById(id ? id : '')
         .pipe(takeUntil(this.destroy$))
         .subscribe(groupProduct => {
            this.groupProduct = groupProduct;
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
      this.initialize(state ?? State.UNDEFINED)
         .pipe(takeUntil(this.destroy$))
         .subscribe(() => {
            this.operation[this.state].init();
         });
   }

   back() {
      this.router.navigate(['/group-product']);
   }

   submit() {
      this.disableAll(true);
      this.operation[this.state]
         .submit(this.groupProduct)
         .pipe(takeUntil(this.destroy$))
         .subscribe(() => {
            this.operation[this.state].successMessage();
            this.back();
         });
   }

   disableInputs(disable: boolean) {
      this.inputId.disabled = disable;
      this.inputName.disabled = disable;
   }

   disableAll(disable: boolean) {
      this.buttonConfirm.disabled = disable;
      this.buttonCancel.disabled = disable;
      this.disableInputs(disable);
   }

   setProduct(id: string) {
      this.groupProductsService
         .readById(id)
         .pipe(takeUntil(this.destroy$))
         .subscribe(groupProduct => {
            this.groupProduct = groupProduct;
         });
   }

   initCreate() {
      this.title = 'Novo grupo de produto';
      this.inputId.visible = false;
   }

   initUpdate() {
      this.title = 'Editar grupo de produto';
      this.inputId.disabled = true;
      this.setProduct(this.route.snapshot.paramMap.get('id') ?? '');
   }

   initBrowse() {
      this.title = 'Consultar grupo de produto';
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
      this.title = 'Deletar grupo de produto';
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
