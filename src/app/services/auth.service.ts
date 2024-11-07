import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string) {
    // Simulação de login: você pode integrar com OAuth 2.0 real aqui.
    return this.http.get<any[]>('http://localhost:3000/users').subscribe(users => {
      const user = users.find(u => u.email === email);
      if (user) {
        this.token = 'some-jwt-token'; // Simulação de um token.
        this.isAuthenticatedSubject.next(true);
        this.router.navigate(['/shopping-list']);
      } else {
        alert('Usuário não encontrado');
      }
    });
  }

  logout() {
    this.token = null;
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  getToken() {
    return this.token;
  }
}
