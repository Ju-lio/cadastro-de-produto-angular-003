import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { State } from 'src/app/enums/state.enum';
import { Product } from 'src/app/models/product.model';

@Injectable({
   providedIn: 'root',
})
export class ProductsService {
   baseUrl = 'http://localhost:3001/products';

   constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

   create(product: Product): Observable<Product> {
      return this.http.post<Product>(this.baseUrl, product);
   }

   update(product: Product): Observable<Product> {
      const url = `${this.baseUrl}/${product.id}`;
      return this.http.put<Product>(url, product);
   }

   browse(product: Product): Observable<Product> {
      const url = `${this.baseUrl}/${product.id}`;
      return this.http.get<Product>(url);
   }

   read(): Observable<Product[]> {
      return this.http.get<Product[]>(this.baseUrl);
   }

   undefined(product: Product) {
      const url = `${this.baseUrl}/${product.id}`;
      return this.http.get<Product>(url);
   }

   readById(id: string): Observable<Product> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Product>(url);
   }

   delete(product: Product) {
      const url = `${this.baseUrl}/${product.id}`;
      return this.http.delete<Product>(url);
   }

   atention(state: string) {
      let message = '';
      switch (state) {
         case State.CREATE:
            message = 'Produto criado com sucesso!';
            break;
         case State.UPDATE:
            message = 'Produto alterado com sucesso!';
            break;
         case State.DELETE:
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
