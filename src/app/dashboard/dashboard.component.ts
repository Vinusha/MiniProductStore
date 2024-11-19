import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  users$: Observable<User[]>;

  constructor(
    private userService: UserService
  ) {
    this.users$ = this.userService.getUsers();
  }
}
