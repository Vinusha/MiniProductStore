import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  private destroy$ = new Subject<void>();

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.errorMessage = ''; 
      },
      error: (error) => {
        this.errorMessage = 'Invalid username or password';
      },
    });
  }

}
