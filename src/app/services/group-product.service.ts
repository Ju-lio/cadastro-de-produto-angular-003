import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { GroupProduct } from '../models/group-product.model';

@Injectable({
   providedIn: 'root',
})
export class GroupProductService {
   baseUrl = 'http://localhost:3001/group-product';

   constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

   create(groupProduct: GroupProduct): Observable<GroupProduct> {
      return this.http.post<GroupProduct>(this.baseUrl, groupProduct);
   }

   update(groupProduct: GroupProduct): Observable<GroupProduct> {
      const url = `${this.baseUrl}/${groupProduct.id}`;
      return this.http.put<GroupProduct>(url, groupProduct);
   }

   getAll(): Observable<GroupProduct[]> {
      return this.http.get<GroupProduct[]>(this.baseUrl);
   }

   undefined(groupProduct: GroupProduct) {
      const url = `${this.baseUrl}/${groupProduct.id}`;
      return this.http.get<GroupProduct>(url);
   }

   readById(id: string): Observable<GroupProduct> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<GroupProduct>(url);
   }

   delete(groupProduct: GroupProduct) {
      const url = `${this.baseUrl}/${groupProduct.id}`;
      return this.http.delete<GroupProduct>(url);
   }

   messageSnackBar(message: string) {
      this.snackBar.open(message, 'Fechar', {
         duration: 3000,
         horizontalPosition: 'right',
         verticalPosition: 'top',
      });
   }

   successMessageCreate() {
      this.messageSnackBar('Grupo de produto criado com sucesso!');
   }

   successMessageUpdate() {
      this.messageSnackBar('Grupo de produto alterado com sucesso!');
   }

   successMessageDelete() {
      this.messageSnackBar('Grupo de produto excluido com sucesso!');
   }

   successMessageUndefined() {
      this.messageSnackBar('Procedimento executado com sucesso!');
   }
}
