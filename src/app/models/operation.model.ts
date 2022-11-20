import { Product } from './product.model';
import { Observable } from 'rxjs';
import { Action } from '../enums/action.enum';

export type Operation = {
  [key in Action]: {
    submit: (product: Product) => Observable<Product>;
    init: () => void;
    successMessage: () => void;
  };
};
