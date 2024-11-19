import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'https://fakestoreapi.com/products';
  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  loadProduct() {
    this.http.get<Product[]>(this.url).pipe(
      tap((products) => {
        this.products = products;
      })
    );
  }

  getProducts(): Observable<Product[]> {
    if (this.products.length === 0) {
      return this.http.get<Product[]>(this.url).pipe(
        tap((products) => {
          this.products = products;
        })
      );
    } else {
      return of(this.products);
    }
  }

  addProduct(product: Product) {
    this.products.push({...product, id: this.products.length + 1});
  }
}
