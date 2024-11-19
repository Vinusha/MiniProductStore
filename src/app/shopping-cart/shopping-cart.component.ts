import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  cartItems: Product[] = [];
  totalPrice: number = 0;
  private destroy$ = new Subject<void>();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$
    .pipe(takeUntil(this.destroy$))
    .subscribe((items) => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
