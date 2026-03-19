import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { 
    path: 'auth', 
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: 'sales', 
    loadChildren: () => import('./features/sales/sales.module').then(m => m.SalesModule) 
  },
  { 
    path: 'manufacturing', 
    loadChildren: () => import('./features/manufacturing/manufacturing.module').then(m => m.ManufacturingModule) 
  },
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }