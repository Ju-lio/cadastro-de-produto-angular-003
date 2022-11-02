import { State } from '../enums/state.enum';
import { Product } from './product.model';
import { Observable } from 'rxjs';

export type Operation = {
   [key in State]: {
      submit: (product: Product) => Observable<Product>;
      init: () => void;
      successMessage: () => void;
   };
};
