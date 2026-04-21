import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necessário para pegar os dados do input

@Component({
  selector: 'app-register',
  standalone: true, // Adicione isso para seguir o padrão das outras telas
  imports: [CommonModule, FormsModule], // Libera o uso de [(ngModel)] no HTML
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class RegisterComponent {
  // Objeto para capturar os dados do novo usuário
  userData = {
    nome: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor() {}

  onRegister() {
    // Aqui faremos a integração com o endpoint de 'POST /api/auth/register' do seu Java
    if (this.userData.password !== this.userData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    console.log('Enviando para o Spring Boot:', this.userData);
  }
}