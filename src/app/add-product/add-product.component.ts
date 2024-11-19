import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  successMessage: string = '';

  constructor(private productService: ProductService) {}

  product: Product = {
    id: 0,
    title: '',
    price: '',
    category: '',
    description: '',
    image: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.productService.addProduct(this.product);
      form.reset();
      this.successMessage = 'Product added successfully!';
      setTimeout(() => {
        this.successMessage = '';
      }, 2000);
    } else {
      console.log('Form is invalid');
    }
  }
}
