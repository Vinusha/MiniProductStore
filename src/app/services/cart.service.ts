import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>(this.cartItems);

  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: Product): void {
    this.cartItems.push(product);
    this.cartItemsSubject.next([...this.cartItems]);
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartItemsSubject.next([...this.cartItems]);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + Number(item.price), 0);
  }
}
