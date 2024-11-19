import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isAuthenticated = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isLoggedIn();
    this.authService.authStatus.subscribe(
      (status: boolean) => (this.isAuthenticated = status)
    );
  }

  logout() {
    this.authService.logout();
  }

  login() {
    this.router.navigate(['/login']);
  }

}
