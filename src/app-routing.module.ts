import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 1. Rota Padrão: Redireciona para o Login se o usuário acessar a raiz
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  // 2. Módulo de Autenticação (Login)
  { 
    path: 'auth', 
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) 
  },

  // 3. Módulo de Vendas (Dashboard de Pedidos)
  { 
    path: 'sales', 
    loadChildren: () => import('./features/sales/sales.module').then(m => m.SalesModule) 
    // Futuramente aqui adicionamos o AuthGuard para proteger a rota
  },

  // 4. Módulo de Manufatura (Fila de Impressão)
  { 
    path: 'manufacturing', 
    loadChildren: () => import('./features/manufacturing/manufacturing.module').then(m => m.ManufacturingModule) 
  },

  // 5. Rota de Fuga: Se o usuário digitar algo que não existe, volta para o login ou 404
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }