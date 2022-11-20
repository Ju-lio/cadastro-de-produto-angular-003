import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject, takeUntil } from 'rxjs';
import { Action } from 'src/app/enums/action.enum';
import { Button } from 'src/app/models/button.model';
import { GroupProduct } from 'src/app/models/group-product.model';
import { Input } from 'src/app/models/input.model';
import { GroupProductService } from 'src/app/services/group-product.service';

export type Operation = {
  [key in Action]: {
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
  action!: Action;
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
    [Action.NEW]: {
      submit: (groupProduct: GroupProduct) =>
        this.groupProductsService.create(groupProduct),
      init: () => this.initNew(),
      successMessage: () => this.groupProductsService.successMessageNew(),
    },
    [Action.EDIT]: {
      submit: (groupProduct: GroupProduct) =>
        this.groupProductsService.edit(groupProduct),
      init: () => this.initEdit(),
      successMessage: () => this.groupProductsService.successMessageEdit(),
    },
    [Action.VIEW]: {
      submit: (groupProduct: GroupProduct) => EMPTY,
      init: () => this.initView(),
      successMessage: () => null,
    },
    [Action.DELETE]: {
      submit: (groupProduct: GroupProduct) =>
        this.groupProductsService.delete(groupProduct),
      init: () => this.initDelete(),
      successMessage: () => this.groupProductsService.successMessageDelete(),
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

  setAction(action: Action) {
    this.action = action;
  }

  getAction(action: string): Action {
    const indexOfAction = Object.values(Action).indexOf(
      action as unknown as Action
    );
    const key = Object.keys(Action)[indexOfAction];
    return key ? Action[key as keyof typeof Action] : Action.NEW;
  }

  initialize(action: string) {
    this.setAction(this.getAction(action));
    this.operation[this.action].init();
  }

  ngOnInit(): void {
    const action = this.route.snapshot.queryParamMap.get('action');
    this.initialize(action ?? Action.NEW);
  }

  cancel() {
    this.groupProduct = {
      id: undefined,
      name: '',
    };
    this.router.navigate(['/group-product']);
  }

  submit() {
    this.disableAll(true);
    this.operation[this.action]
      .submit(this.groupProduct)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.operation[this.action].successMessage();
        this.disableAll(false);
        this.cancel();
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

  initNew() {
    this.title = 'Novo grupo de produto';
    this.inputId.visible = false;
  }

  initEdit() {
    this.title = 'Editar grupo de produto';
    this.inputId.disabled = true;
    this.setProduct(this.route.snapshot.paramMap.get('id') ?? '');
  }

  initView() {
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
}
