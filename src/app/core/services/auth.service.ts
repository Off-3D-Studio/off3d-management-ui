import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface LoginResponse {
  token: string;
  name: string;
  email: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly API_URL = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.API_URL, credentials).pipe(
      tap(res => {
        // Agora acessamos os campos que o seu AuthController envia
        if (res && res.token) {
          localStorage.setItem('off3d_token', res.token);
          localStorage.setItem('off3d_user_name', res.name); // Opcional: para exibir "Bem-vindo, Amanda"
        }
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('off3d_token');
  }
}