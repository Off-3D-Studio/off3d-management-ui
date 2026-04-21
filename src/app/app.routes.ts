import { Routes } from '@angular/router';
import { HomeComponent } from './features/auth/pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Carrega a Home por padrão
  // ... outras rotas que você já tiver (ex: sales, customers)
];