import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { State } from '../enums/state.enum';

@Injectable({
   providedIn: 'root',
})
export class SharedService {
   readonly state = State;

   constructor(private snackBar: MatSnackBar) {}

   atention(state: number) {
      let message = '';
      switch (state) {
         case this.state.INSERT:
            message = 'Produto criado com sucesso!';
            break;
         case this.state.UPDATE:
            message = 'Produto alterado com sucesso!';
            break;
         case this.state.DELETE:
            message = 'Produto excluido com sucesso!';
            break;
         default:
            message = 'Procedimento executado com sucesso!';
            break;
      }
      this.snackBar.open(message, 'Fechar', {
         duration: 3000,
         horizontalPosition: 'right',
         verticalPosition: 'top',
      });
   }
}
