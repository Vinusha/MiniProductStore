import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private url = 'https://fakestoreapi.com/auth/login';
  authStatus = this.loggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.url, { username, password }).pipe(
      tap((response) => {
        if (response.token) {
          this.loggedIn.next(true);
          this.router.navigate(['/dashboard']);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        alert('Login failed: Invalid username or password');
        return throwError(error);
      })
    );
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
