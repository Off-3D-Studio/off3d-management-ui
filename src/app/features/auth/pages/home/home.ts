import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  loginForm!: FormGroup;
  isPasswordVisible = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Garantindo que enviamos exatamente o que o AuthenticationDTO espera
      const loginData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.authService.login(loginData).subscribe({
        next: (res) => {
          console.log('Login bem-sucedido para:', res.name);
          this.router.navigate(['/sales']);
        },
        error: (err) => {
          // DEBUG: Abra o F12 no navegador e veja o que aparece aqui
          console.error('Status do erro:', err.status);
          console.error('Mensagem do Java:', err.error);

          if (err.status === 401 || err.status === 403) {
            alert('Acesso Negado: E-mail ou senha incorretos no banco de dados.');
          } else if (err.status === 0) {
            alert('Erro de Rede: O servidor Spring Boot está desligado ou o CORS bloqueou.');
          } else {
            alert('Erro inesperado ao conectar com a Management API.');
          }
        }
      });
    }
  }

  togglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}