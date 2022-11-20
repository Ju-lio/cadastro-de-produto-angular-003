import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3001/product';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    console.log(product.group);
    return this.http.put<Product>(url, product);
  }

  getAll(): Observable<Product[]> {
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

  messageSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  successMessageCreate() {
    this.messageSnackBar('Produto criado com sucesso!');
  }

  successMessageUpdate() {
    this.messageSnackBar('Produto alterado com sucesso!');
  }

  successMessageDelete() {
    this.messageSnackBar('Produto excluido com sucesso!');
  }

  successMessageUndefined() {
    this.messageSnackBar('Procedimento executado com sucesso!');
  }
}
