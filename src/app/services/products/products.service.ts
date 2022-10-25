import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable({
   providedIn: 'root',
})
export class ProductsService {
   baseUrl = 'http://localhost:3001/products';

   constructor(private http: HttpClient) {}

   create(product: Product): Observable<Product> {
      return this.http.post<Product>(this.baseUrl, product);
   }

   update(product: Product): Observable<Product> {
      const url = `${this.baseUrl}/${product.id}`;
      return this.http.put<Product>(url, product);
   }

   read(): Observable<Product[]> {
      return this.http.get<Product[]>(this.baseUrl);
   }

   readById(id: string): Observable<Product> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Product>(url);
   }

   delete(id: string) {
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete<Product>(url);
   }
}
