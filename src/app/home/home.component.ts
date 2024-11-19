import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  products$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.products$ = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
